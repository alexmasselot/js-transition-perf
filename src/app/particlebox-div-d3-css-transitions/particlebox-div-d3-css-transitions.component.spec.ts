/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticleboxDivD3CssTransitionsComponent } from './particlebox-div-d3-css-transitions.component';

describe('ParticleboxDivD3CssTransitionsComponent', () => {
  let component: ParticleboxDivD3CssTransitionsComponent;
  let fixture: ComponentFixture<ParticleboxDivD3CssTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleboxDivD3CssTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleboxDivD3CssTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
