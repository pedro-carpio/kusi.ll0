import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalystComponent } from './data-analyst.component';

describe('DataAnalystComponent', () => {
  let component: DataAnalystComponent;
  let fixture: ComponentFixture<DataAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAnalystComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
