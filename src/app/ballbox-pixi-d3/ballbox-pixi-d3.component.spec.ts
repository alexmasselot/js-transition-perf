/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallboxPixiD3Component } from './ballbox-pixi-d3.component';

describe('BallboxPixiD3Component', () => {
  let component: BallboxPixiD3Component;
  let fixture: ComponentFixture<BallboxPixiD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallboxPixiD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallboxPixiD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
