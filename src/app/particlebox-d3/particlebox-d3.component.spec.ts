/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticleboxD3Component } from './particlebox-d3.component';

describe('ParticleboxD3Component', () => {
  let component: ParticleboxD3Component;
  let fixture: ComponentFixture<ParticleboxD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleboxD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleboxD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
