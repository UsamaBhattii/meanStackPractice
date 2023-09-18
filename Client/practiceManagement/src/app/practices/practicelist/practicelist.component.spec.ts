import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticelistComponent } from './practicelist.component';

describe('PracticelistComponent', () => {
  let component: PracticelistComponent;
  let fixture: ComponentFixture<PracticelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticelistComponent]
    });
    fixture = TestBed.createComponent(PracticelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
