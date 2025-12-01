import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CopyService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Copies text to the clipboard. Returns true on success.
   */
  async copy(text: string): Promise<boolean> {
    if (!text || !this.isBrowser) {
      return false;
    }

    // navigator.clipboard preferred
    try {
      if (navigator && (navigator as any).clipboard && (navigator as any).clipboard.writeText) {
        await (navigator as any).clipboard.writeText(text);
        return true;
      }
    } catch (err) {
      // fall through to fallback
      // console.warn('navigator.clipboard failed', err);
    }

    // Fallback: textarea + execCommand
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.setAttribute('aria-hidden', 'true');
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return !!ok;
    } catch (err) {
      // console.error('copy fallback failed', err);
      return false;
    }
  }
}
