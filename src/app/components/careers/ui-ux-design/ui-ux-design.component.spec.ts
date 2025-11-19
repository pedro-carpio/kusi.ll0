import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxDesignComponent } from './ui-ux-design.component';

describe('UiUxDesignComponent', () => {
  let component: UiUxDesignComponent;
  let fixture: ComponentFixture<UiUxDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUxDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
