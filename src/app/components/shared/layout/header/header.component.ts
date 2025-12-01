import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private langSub?: Subscription;
  
  // left menu items (static for now)
  public leftItems = [
    { key: 'love', route: '#love' },
    { key: 'design', route: '#design' },
    { key: 'art', route: '#art' }
  ];

  constructor(
    private i18n: I18nService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Subscribe to language changes to trigger re-render
    this.langSub = this.i18n.langChanges.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  // expose current language to the template
  get currentLang(): string {
    return this.i18n.getLang();
  }

  // Toggle between 'en' and 'es' (expand later if you add more languages)
  toggleLang(event?: Event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const curr = this.i18n.getLang();
    const next = curr === 'en' ? 'es' : 'en';
    this.i18n.setLang(next);
    console.log('Language switched to', next);
  }

  t(key: string) {
    return this.i18n.t(key);
  }

  onNavClick(key: string, event?: Event) {
    if (event) { event.preventDefault(); }
    // placeholder: implement navigation or analytics here
    console.log('header nav click:', key);
  }
}
