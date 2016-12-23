/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallboxD3Component } from './ballbox-d3.component';

describe('BallboxD3Component', () => {
  let component: BallboxD3Component;
  let fixture: ComponentFixture<BallboxD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallboxD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallboxD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
