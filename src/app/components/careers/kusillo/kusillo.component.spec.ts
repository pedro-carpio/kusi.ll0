import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KusilloComponent } from './kusillo.component';

describe('KusilloComponent', () => {
  let component: KusilloComponent;
  let fixture: ComponentFixture<KusilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KusilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KusilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
