import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class MetaTagsService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  private localeFor(lang: string) {
    return lang === 'es' ? 'es_ES' : 'en_US';
  }

  /**
   * Set a canonical link element (replace if exists)
   */
  setCanonical(url: string) {
    if (!url) {
      return;
    }
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
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
    const url = opts.url || (typeof window !== 'undefined' ? window.location.href : '');
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
  }
}
