import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactGeneralistComponent } from './impact-generalist.component';

describe('ImpactGeneralistComponent', () => {
  let component: ImpactGeneralistComponent;
  let fixture: ComponentFixture<ImpactGeneralistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactGeneralistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactGeneralistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
