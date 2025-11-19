import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEngineerComponent } from './ui-engineer.component';

describe('UiEngineerComponent', () => {
  let component: UiEngineerComponent;
  let fixture: ComponentFixture<UiEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiEngineerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
