import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the expected text content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent || '';
    expect(text).toContain('Hecho con');
    expect(text).toContain('por un Kusillo medio artista');
  });

  it('should have an img with correct alt and width attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    if (img) {
      // check the alt attribute
      expect(img.getAttribute('alt')).toBe('realistic pulsating heart animation');
      // width attribute is stored as an attribute on the element in the template
      expect(img.getAttribute('width')).toBe('32');
    }
  });
});
