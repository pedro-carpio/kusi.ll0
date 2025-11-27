import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsArchitectComponent } from './solutions-architect.component';

describe('SolutionsArchitectComponent', () => {
  let component: SolutionsArchitectComponent;
  let fixture: ComponentFixture<SolutionsArchitectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsArchitectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
