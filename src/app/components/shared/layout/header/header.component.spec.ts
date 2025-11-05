import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { I18nService } from '../../../../services/i18n.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [I18nService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('renders left nav labels from i18n service', () => {
    i18n.setLang('en');
    fixture.detectChanges();

    const leftLinks = fixture.nativeElement.querySelectorAll('.left-nav .nav-link');
    expect(leftLinks.length).toBe(3);
    expect(leftLinks[0].textContent.trim()).toBe('Love');
    expect(leftLinks[1].textContent.trim()).toBe('Design');
    expect(leftLinks[2].textContent.trim()).toBe('Art');
  });

  it('renders right nav contact link label from i18n service', () => {
    i18n.setLang('es');
    fixture.detectChanges();

    const contactLink = fixture.nativeElement.querySelector('.right-nav .contact-link');
    expect(contactLink).toBeTruthy();
    expect(contactLink.textContent.trim()).toBe('Contacto');
  });
});
