/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallboxPixiTailComponent } from './ballbox-pixi-tail.component';

describe('BallboxPixiTailComponent', () => {
  let component: BallboxPixiTailComponent;
  let fixture: ComponentFixture<BallboxPixiTailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallboxPixiTailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallboxPixiTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
