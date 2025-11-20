import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { I18nService } from '../../services/i18n.service';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  imports: [RouterModule]
})
export class DataComponent implements OnInit, OnDestroy {
  roles: string[] = [];
  currentRole = '';
  showRole = true; // toggles opacity for fade
  private rotationInterval = 1500; // ms
  private intervalId: any;
  private langSub?: Subscription;

  constructor(private i18n: I18nService) {}

  t(key: string): any {
    return this.i18n.t(key);
  }

  /**
   * Copy given text to clipboard. Uses navigator.clipboard when available,
   * otherwise falls back to a hidden textarea + document.execCommand('copy').
   */
  async copy(value: string): Promise<void> {
    if (!value) { return; }
    try {
      if (navigator && (navigator as any).clipboard && (navigator as any).clipboard.writeText) {
        await (navigator as any).clipboard.writeText(value);
        // Small confirmation in console; UI feedback can be added later
        console.log('Copied to clipboard:', value);
        return;
      }
    } catch (err) {
      // proceed to fallback
      console.warn('navigator.clipboard failed, falling back to execCommand copy', err);
    }

    // Fallback method
    try {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      // Move element out of screen
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      console.log('Copied to clipboard (fallback):', value);
    } catch (err) {
      console.error('Copy to clipboard failed', err);
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
        alert(this.t('data.shareUnsupported') || 'Sharing not supported in this browser');
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
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) { clearInterval(this.intervalId); }
    if (this.langSub) { this.langSub.unsubscribe(); }
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
    if (this.intervalId) { clearInterval(this.intervalId); }
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
