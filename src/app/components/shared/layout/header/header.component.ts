import { Component } from '@angular/core';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // left menu items (static for now)
  public leftItems = [
    { key: 'love', route: '#love' },
    { key: 'design', route: '#design' },
    { key: 'art', route: '#art' }
  ];

  constructor(private i18n: I18nService) {}

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
