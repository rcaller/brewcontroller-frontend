import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HltComponent } from './hlt.component';

describe('GraphComponent', () => {
  let component: HltComponent;
  let fixture: ComponentFixture<HltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
