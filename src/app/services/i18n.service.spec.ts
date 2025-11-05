import { TestBed } from '@angular/core/testing';

import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    // Clear any persisted language to ensure deterministic tests
    try { localStorage.removeItem('lang'); } catch (e) { /* ignore */ }
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns translations for dotted keys and respects language', () => {
  service.setLang('en');
  expect(service.t('header.nav.love')).toBe('Love');

  service.setLang('es');
  expect(service.t('header.nav.love')).toBe('Amor');
  });

  it('persists language to localStorage and emits changes', (done) => {
    spyOn(localStorage, 'setItem');
    const emissions: string[] = [];
    let sub: any;
    sub = service.langChanges.subscribe(l => {
      emissions.push(l);
      // when we receive the new lang we can assert
      if (emissions.indexOf('es') !== -1) {
        expect(localStorage.setItem).toHaveBeenCalledWith('lang', 'es');
        sub.unsubscribe();
        done();
      }
    });

    service.setLang('es');
  });

  it('falls back to default language if key missing', () => {
    service.setLang('en');
    // key that doesn't exist
    const key = 'nonexistent.path.value';
    expect(service.t(key)).toBe(key);
  });
});
