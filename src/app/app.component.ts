import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './components/shared/layout/footer/footer.component';
import { HeaderComponent } from './components/shared/layout/header/header.component';
import { I18nService } from './services/i18n.service';
import { UserConfigService } from './services/user-config/user-config.service';

declare const bootstrap: any;

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private isBrowser: boolean;
  private routerSub?: Subscription;
  isRouteTransitioning = false;
  title = 'Casa';
  @ViewChild('userConfigModal') userConfigModal!: ElementRef;

  // expose a thin helper so the template can call t('...')
  t(key: string): string {
    return this.i18n.t(key);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    try {
      if (this.resizeHandler) {
        window.removeEventListener('resize', this.resizeHandler);
      }
      if (this.routerSub) {
        this.routerSub.unsubscribe();
      }
    } catch (e) {
      // ignore
    }
  }

  // default selection for the modal (now Spanish as requested)
  selectedLang = 'es';
  private bsModalRef: any;
  public isMobile = false;
  private resizeHandler?: () => void;

  constructor(
    private i18n: I18nService,
    private userConfig: UserConfigService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    const saved = this.userConfig.getLanguage();
    if (saved) {
      this.selectedLang = saved;
      this.i18n.setLang(saved);
    }
    
    // Subscribe to route changes for yo-como transition animation
    if (this.isBrowser) {
      let previousUrl = window.location.pathname;
      this.routerSub = this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          console.log('Navigation:', previousUrl, '->', event.url);
          // Trigger flash when navigating between yo-como and mis/datos routes
          const isFromCurriculum = previousUrl.includes('/yo-como/') || previousUrl.includes('/mis/datos');
          const isToCurriculum = event.url.includes('/yo-como/') || event.url.includes('/mis/datos');
          if (isFromCurriculum && isToCurriculum) {
            console.log('Flash activated!');
            this.isRouteTransitioning = true;
          }
        }
        if (event instanceof NavigationEnd) {
          previousUrl = event.urlAfterRedirects || event.url;
          // Remove flash after animation completes
          if (this.isRouteTransitioning) {
            setTimeout(() => {
              this.isRouteTransitioning = false;
            }, 400);
          }
        }
      });
    }
    if (saved) {
      this.selectedLang = saved;
      this.i18n.setLang(saved);
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    // If the user hasn't configured preferences yet, show the modal
    setTimeout(() => {
      if (!this.userConfig.isConfigured()) {
        const el = this.userConfigModal && this.userConfigModal.nativeElement;
        // detect mobile viewport
        try {
          this.isMobile = window.matchMedia('(max-width: 767px)').matches;
          this.resizeHandler = () => {
            this.isMobile = window.matchMedia('(max-width: 767px)').matches;
          };
          window.addEventListener('resize', this.resizeHandler);
        } catch (e) {
          this.isMobile = false;
        }
        if (el) {
          // Use Bootstrap's modal if available
          try {
            // prefer the bootstrap global if available
            const Modal = (window as any).bootstrap?.Modal || bootstrap?.Modal;
            this.bsModalRef = Modal ? new Modal(el) : null;
            if (this.bsModalRef && typeof this.bsModalRef.show === 'function') {
              this.bsModalRef.show();
            }
            // Save if user clicks on the backdrop (outside modal content)
            try {
              el.addEventListener('click', (ev: any) => {
                if (ev.target === el) {
                  this.saveUserConfig();
                }
              });
              // Also listen to bootstrap's hidden event in case modal is dismissed by other means
              el.addEventListener('hidden.bs.modal', () => {
                this.saveUserConfig();
              });
            } catch (e) {
              // ignore listener errors
            }
          } catch (err) {
            // Fallback: ensure the modal is visible by adding show classes
            el.classList.add('show');
            el.style.display = 'block';
          }
        }
      }
    }, 50);
  }

  saveUserConfig() {
    if (!this.selectedLang) {
      return;
    }
    this.userConfig.setLanguage(this.selectedLang);
    this.i18n.setLang(this.selectedLang);
    if (this.bsModalRef && typeof this.bsModalRef.hide === 'function') {
      this.bsModalRef.hide();
    } else if (this.userConfigModal) {
      const el = this.userConfigModal.nativeElement;
      el.classList.remove('show');
      el.style.display = 'none';
    }
  }

  changeLang(lang: string) {
    if (!lang) {
      return;
    }
    this.selectedLang = lang;
    // Apply immediately for preview
    this.i18n.setLang(lang);
  }

  // Toggle language helper for the modal link
  toggleLang() {
    const curr = this.i18n.getLang();
    const next = curr === 'en' ? 'es' : 'en';
    this.changeLang(next);
  }
}
