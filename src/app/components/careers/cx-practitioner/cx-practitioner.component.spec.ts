import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxPractitionerComponent } from './cx-practitioner.component';

describe('CxPractitionerComponent', () => {
  let component: CxPractitionerComponent;
  let fixture: ComponentFixture<CxPractitionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CxPractitionerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CxPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
