import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoswitchComponent } from './goswitch.component';

describe('GoswitchComponent', () => {
  let component: GoswitchComponent;
  let fixture: ComponentFixture<GoswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
