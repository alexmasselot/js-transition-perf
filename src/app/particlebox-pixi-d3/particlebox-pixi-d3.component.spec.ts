/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticleboxPixiD3Component } from './particlebox-pixi-d3.component';

describe('ParticleboxPixiD3Component', () => {
  let component: ParticleboxPixiD3Component;
  let fixture: ComponentFixture<ParticleboxPixiD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleboxPixiD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleboxPixiD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
