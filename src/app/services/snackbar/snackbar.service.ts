import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private containerId = 'kusi-snackbar-container';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.ensureContainer();
    }
  }

  private ensureContainer() {
    if (!this.isBrowser) {
      return;
    }
    if (!document.getElementById(this.containerId)) {
      const c = document.createElement('div');
      c.id = this.containerId;
      c.style.position = 'fixed';
      c.style.zIndex = '1080';
      c.style.right = '1rem';
      c.style.bottom = '1rem';
      c.style.display = 'flex';
      c.style.flexDirection = 'column';
      c.style.gap = '0.5rem';
      document.body.appendChild(c);
    }
  }

  show(message: string, timeout = 2500) {
    if (!this.isBrowser) {
      return;
    }
    this.ensureContainer();
    const container = document.getElementById(this.containerId)!;

    const el = document.createElement('div');
    el.className = 'alert alert-secondary shadow-sm';
    el.setAttribute('role', 'status');
    el.style.minWidth = '180px';
    el.style.margin = '0';
    el.style.opacity = '0';
    el.style.transition = 'opacity 200ms ease-in-out, transform 200ms ease-in-out';
    el.style.transform = 'translateY(6px)';
    el.innerText = message;

    container.appendChild(el);

    // trigger enter
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    const remove = () => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(6px)';
      setTimeout(() => {
        try {
          container.removeChild(el);
        } catch (e) {
          /* ignore */
        }
      }, 220);
    };

    const t = setTimeout(remove, timeout);

    // allow click to dismiss early
    el.addEventListener('click', () => {
      clearTimeout(t);
      remove();
    });
  }
}
