import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandKusilloProjectComponent } from './brand-kusillo.project.component';

describe('BrandKusilloProjectComponent', () => {
  let component: BrandKusilloProjectComponent;
  let fixture: ComponentFixture<BrandKusilloProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandKusilloProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandKusilloProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
