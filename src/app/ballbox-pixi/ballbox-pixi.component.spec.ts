/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallboxPixiComponent } from './ballbox-pixi.component';

describe('BallboxPixiComponent', () => {
  let component: BallboxPixiComponent;
  let fixture: ComponentFixture<BallboxPixiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallboxPixiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallboxPixiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
