/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticleboxD3CssTransitionsComponent } from './particlebox-d3-css-transitions.component';

describe('ParticleboxD3CssTransitionsComponent', () => {
  let component: ParticleboxD3CssTransitionsComponent;
  let fixture: ComponentFixture<ParticleboxD3CssTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleboxD3CssTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleboxD3CssTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
