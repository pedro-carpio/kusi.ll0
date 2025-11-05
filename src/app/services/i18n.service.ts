import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private defaultLang = 'en';
  private lang$ = new BehaviorSubject<string>(this.loadLang());
  public langChanges = this.lang$.asObservable();

  // Translations organized as a descriptive tree (header data)
  private translations: Record<string, any> = {
    en: {
      header: {
        brand: 'Pedro',
        nav: {
          love: 'Love',
          design: 'Design',
          art: 'Art',
          creations: 'Creations',
          contact: 'Contact',
          menu: 'Menu'
        }
      }
    },
    es: {
      header: {
        brand: 'Pedro',
        nav: {
          love: 'Amor',
          design: 'Diseño',
          art: 'Arte',
          creations: 'Creaciones',
          contact: 'Contacto',
          menu: 'Menú'
        }
      }
    }
  };

  constructor() {}

  private loadLang(): string {
    try {
      const saved = localStorage.getItem('lang');
      return (saved) ? saved : this.defaultLang;
    } catch (e) {
      return this.defaultLang;
    }
  }

  getLang(): string {
    return this.lang$.value;
  }

  setLang(lang: string) {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // ignore storage errors
    }
    this.lang$.next(lang);
  }

  // Helper to resolve dotted paths on an object, e.g. 'header.nav.love'
  private getByPath(obj: any, path: string): any {
    if (!obj || !path) { return undefined; }
    const parts = path.split('.');
    let cur: any = obj;
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
        cur = cur[p];
      } else {
        return undefined;
      }
    }
    return cur;
  }

  // t: translate a key. Supports dotted keys (new tree) like 'header.nav.love'
  // Also keeps a tolerant fallback: tries dotted path, then top-level key on current lang,
  // then dotted path on defaultLang, then top-level on defaultLang, then returns the key.
  t(key: string): string {
    const lang = this.getLang();

    // 1) try dotted path on current lang
    const v1 = this.getByPath(this.translations[lang], key);
    if (v1 !== undefined) { return v1; }

    // 2) try top-level key (legacy) on current lang
    if (this.translations[lang] && this.translations[lang][key] !== undefined) {
      return this.translations[lang][key];
    }

    // 3) try dotted path on defaultLang
    const v2 = this.getByPath(this.translations[this.defaultLang], key);
    if (v2 !== undefined) { return v2; }

    // 4) try top-level on defaultLang
    if (this.translations[this.defaultLang] && this.translations[this.defaultLang][key] !== undefined) {
      return this.translations[this.defaultLang][key];
    }

    // fallback: return the raw key
    return key;
  }
}
