import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { I18nService } from '../../services/i18n.service';
import { CopyService } from '../../services/copy/copy.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { MetaTagsService } from '../../services/meta-tags/meta-tags.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  imports: [RouterModule],
})
export class DataComponent implements OnInit, OnDestroy {
  roles: string[] = [];
  currentRole = '';
  showRole = true; // toggles opacity for fade
  private rotationInterval = 1500; // ms
  private intervalId: any;
  private langSub?: Subscription;

  constructor(
    private i18n: I18nService,
    private copySvc: CopyService,
    private snackbar: SnackbarService,
    private metaTags: MetaTagsService
  ) {}

  t(key: string): any {
    return this.i18n.t(key);
  }

  /**
   * Copy given text to clipboard. Uses navigator.clipboard when available,
   * otherwise falls back to a hidden textarea + document.execCommand('copy').
   */
  async copy(value: string): Promise<void> {
    if (!value) {
      return;
    }
    try {
      const ok = await this.copySvc.copy(value);
      if (ok) {
        const lang = this.i18n.getLang();
        const msg = lang === 'es' ? 'Copiado al portapapeles' : 'Copied to clipboard';
        this.snackbar.show(msg);
      } else {
        const lang = this.i18n.getLang();
        const msg = lang === 'es' ? 'No se pudo copiar' : 'Copy failed';
        this.snackbar.show(msg);
      }
    } catch (err) {
      console.error('copy failed', err);
      const lang = this.i18n.getLang();
      const msg = lang === 'es' ? 'No se pudo copiar' : 'Copy failed';
      this.snackbar.show(msg);
    }
  }

  /** Copy the current page URL to clipboard */
  copyCurrentUrl(): void {
    try {
      const url = window.location.href;
      this.copy(url);
    } catch (err) {
      console.error('copyCurrentUrl failed', err);
    }
  }

  /** Use the native Web Share API if available */
  async shareNative(): Promise<void> {
    try {
      if ((navigator as any).share) {
        await (navigator as any).share({
          title: document.title,
          text: this.t('data.shareText') || '',
          url: window.location.href,
        });
      } else {
        // fallback
        console.error(this.t('data.shareUnsupported') || 'Sharing not supported in this browser');
        this.snackbar.show(
          this.t('data.shareUnsupported') || 'Sharing not supported in this browser'
        );
      }
    } catch (err) {
      console.error('Native share failed', err);
    }
  }

  ngOnInit(): void {
    this.loadRoles();
    // Restart rotation when language changes
    this.langSub = this.i18n.langChanges.subscribe(() => {
      this.loadRoles();
      // update meta tags in case translated values changed
      this.applyMetaTags();
    });

    // initial meta tags
    this.applyMetaTags();
  }

  private applyMetaTags() {
    try {
      const lang = this.i18n.getLang();
      const name = this.i18n.t('data.name') || 'Profile';
      const subtitle = this.i18n.t('data.subtitle') || '';
      const shareText = (this.i18n.t('data.shareText') as string) || subtitle || '';
      const image = '/kusillo.webp';
      const url = typeof window !== 'undefined' ? window.location.href : '';
      this.metaTags.setProfileTags({
        title: `${name} — ${subtitle}`,
        description: shareText,
        image,
        url,
        lang,
      });
    } catch (e) {
      // ignore meta tag errors
      console.warn('meta tags update failed', e);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private loadRoles(): void {
    const val = this.i18n.t('data.personal.rolesList') as any;
    this.roles = Array.isArray(val) ? val : [];
    if (this.roles.length === 0) {
      this.currentRole = this.i18n.t('data.subtitle') || '';
      return;
    }
    // initialise
    this.currentRole = this.roles[0];
    this.showRole = true;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    let idx = 0;
    this.intervalId = setInterval(() => {
      // fade out
      this.showRole = false;
      setTimeout(() => {
        idx = (idx + 1) % this.roles.length;
        this.currentRole = this.roles[idx];
        this.showRole = true;
      }, 250); // match CSS transition duration
    }, this.rotationInterval);
  }
}
