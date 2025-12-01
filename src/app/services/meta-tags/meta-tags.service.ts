import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class MetaTagsService {
  private isBrowser: boolean;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private localeFor(lang: string) {
    return lang === 'es' ? 'es_ES' : 'en_US';
  }

  /**
   * Set a canonical link element (replace if exists)
   * Works in both browser and SSR
   */
  setCanonical(url: string) {
    if (!url) return;
    try {
      let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
      if (!link) {
        link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    } catch (e) {
      console.warn('setCanonical failed', e);
    }
  }

  /**
   * Set or replace a JSON-LD script node with id kusi-jsonld
   * Works in both browser and SSR
   */
  setStructuredData(obj: object) {
    try {
      const id = 'kusi-jsonld';
      let script = this.document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = this.document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        this.document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(obj);
    } catch (e) {
      console.warn('setStructuredData failed', e);
    }
  }

  /**
   * Set alternate/hreflang links for multilingual pages. Accepts a map { lang: url }
   */
  setAlternateLinks(alternates: Record<string, string>) {
    if (!alternates) return;
    try {
      // remove any previous alternate links we manage
      const prev = this.document.querySelectorAll("link[rel='alternate'][data-kusi]");
      prev.forEach((n) => n.parentElement?.removeChild(n));
      for (const [lang, url] of Object.entries(alternates)) {
        const link = this.document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        link.setAttribute('href', url);
        link.setAttribute('data-kusi', '1');
        this.document.head.appendChild(link);
      }
    } catch (e) {
      console.warn('setAlternateLinks failed', e);
    }
  }

  /**
   * Add og:locale:alternate meta tags for other locales
   */
  setOgLocaleAlternates(locales: string[]) {
    if (!locales || locales.length === 0) return;
    try {
      // remove previous
      const prev = this.document.querySelectorAll("meta[property='og:locale:alternate'][data-kusi]");
      prev.forEach((n) => n.parentElement?.removeChild(n));
      for (const l of locales) {
        const m = this.document.createElement('meta');
        m.setAttribute('property', 'og:locale:alternate');
        m.setAttribute('content', l);
        m.setAttribute('data-kusi', '1');
        this.document.head.appendChild(m);
      }
    } catch (e) {
      console.warn('setOgLocaleAlternates failed', e);
    }
  }

  /**
   * Set html lang attribute for the document
   */
  setHtmlLang(lang: string) {
    try {
      if (this.document.documentElement) {
        this.document.documentElement.lang = lang || 'en';
      }
    } catch (e) {
      /* ignore */
    }
  }
  /**
   * Clear previously set social/meta tags that we manage
   */
  private clearManaged() {
    const props = [
      'og:title',
      'og:description',
      'og:image',
      'og:url',
      'og:type',
      'og:locale',
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
    ];
    for (const p of props) {
      try {
        this.meta.removeTag(`property='${p}'`);
      } catch (e) {
        /* ignore */
      }
      try {
        this.meta.removeTag(`name='${p}'`);
      } catch (e) {
        /* ignore */
      }
    }
  }

  /**
   * Set meta tags for a personal/profile page (data component)
   */
  setProfileTags(opts: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    lang?: string;
  }) {
    const title = opts.title || '';
    const description = opts.description || '';
    const image = opts.image || '/kusillo.webp';
    const url = opts.url || (this.isBrowser ? window.location.href : '');
    const lang = opts.lang || 'en';

    // Title (document + meta)
    this.title.setTitle(title);

    // Basic description
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:locale', content: this.localeFor(lang) });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // canonical
    this.setCanonical(url);
    // Set html lang so robots and browsers know the page language
    this.setHtmlLang(opts.lang || 'en');

    // Add structured data for a Person (helps robots understand the page)
    try {
      const person: any = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: opts.title,
        url,
        description,
        image,
        inLanguage: opts.lang || 'en',
      };
      this.setStructuredData(person);
    } catch (e) {
      // ignore
    }
  }
}
