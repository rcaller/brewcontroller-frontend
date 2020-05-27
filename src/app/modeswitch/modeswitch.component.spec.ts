import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeswitchComponent } from './modeswitch.component';

describe('GoswitchComponent', () => {
  let component: ModeswitchComponent;
  let fixture: ComponentFixture<ModeswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
