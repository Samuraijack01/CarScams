import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacksWireFrameComponent } from './jacks-wire-frame.component';

describe('JacksWireFrameComponent', () => {
  let component: JacksWireFrameComponent;
  let fixture: ComponentFixture<JacksWireFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacksWireFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacksWireFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
