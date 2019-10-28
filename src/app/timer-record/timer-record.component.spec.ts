import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRecordComponent } from './timer-record.component';

describe('TimerRecordComponent', () => {
  let component: TimerRecordComponent;
  let fixture: ComponentFixture<TimerRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
