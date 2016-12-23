/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallboxD3LimitTransitionsComponent } from './ballbox-d3-limit-transitions.component';

describe('BallboxD3LimitTransitionsComponent', () => {
  let component: BallboxD3LimitTransitionsComponent;
  let fixture: ComponentFixture<BallboxD3LimitTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallboxD3LimitTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallboxD3LimitTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
