import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentImageComponent } from './content-image.component';

describe('ContentImageComponent', () => {
  let component: ContentImageComponent;
  let fixture: ComponentFixture<ContentImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
