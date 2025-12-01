import { Component, EventEmitter, Input, Output, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../../../services/i18n.service';
import { CopyService } from '../../../../services/copy/copy.service';
import { SnackbarService } from '../../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-share-modal',
  imports: [CommonModule],
  templateUrl: './share-modal.component.html',
  styleUrl: './share-modal.component.scss',
})
export class ShareModalComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  private isBrowser: boolean;

  constructor(
    private i18n: I18nService,
    private copySvc: CopyService,
    private snackbar: SnackbarService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  t(key: string): any {
    return this.i18n.t(key);
  }

  close(): void {
    this.closed.emit();
    if (this.isBrowser) {
      document.body.classList.remove('modal-open');
    }
  }

  /** Copy the current page URL to clipboard */
  copyCurrentUrl(): void {
    if (!this.isBrowser) return;
    try {
      const url = window.location.href;
      this.copy(url);
    } catch (err) {
      console.error('copyCurrentUrl failed', err);
    }
  }

  /** Use the native Web Share API if available */
  async shareNative(): Promise<void> {
    if (!this.isBrowser) return;
    try {
      if ((navigator as any).share) {
        const name = this.t('data.name') || 'Profile';
        const subtitle = this.t('data.subtitle') || '';
        await (navigator as any).share({
          title: `${name} — ${subtitle}`,
          text: this.t('data.shareText') || '',
          url: window.location.href,
        });
      } else {
        console.error(this.t('data.shareUnsupported') || 'Sharing not supported in this browser');
        this.snackbar.show(this.t('data.shareUnsupported') || 'Sharing not supported in this browser');
      }
    } catch (err) {
      console.error('Native share failed', err);
    }
  }

  /** Generate LinkedIn share URL */
  getLinkedInShareUrl(): string {
    if (!this.isBrowser) return '';
    const url = encodeURIComponent(window.location.href);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  }

  /** Generate Twitter/X share URL */
  getTwitterShareUrl(): string {
    if (!this.isBrowser) return '';
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.t('data.shareText') || '');
    return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  }

  /** Generate WhatsApp share URL */
  getWhatsAppShareUrl(): string {
    if (!this.isBrowser) return '';
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.t('data.shareText') || '');
    return `https://wa.me/?text=${text}%20${url}`;
  }

  /** Generate Email share URL */
  getEmailShareUrl(): string {
    if (!this.isBrowser) return '';
    const url = encodeURIComponent(window.location.href);
    const subject = encodeURIComponent(`${this.t('data.name')} — ${this.t('data.subtitle')}`);
    const body = encodeURIComponent(`${this.t('data.shareText') || ''}\n\n${window.location.href}`);
    return `mailto:?subject=${subject}&body=${body}`;
  }

  private async copy(value: string): Promise<void> {
    if (!value) return;
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
}
