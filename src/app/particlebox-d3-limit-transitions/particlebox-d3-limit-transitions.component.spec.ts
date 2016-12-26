/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticleboxD3LimitTransitionsComponent } from './particlebox-d3-limit-transitions.component';

describe('ParticleboxD3LimitTransitionsComponent', () => {
  let component: ParticleboxD3LimitTransitionsComponent;
  let fixture: ComponentFixture<ParticleboxD3LimitTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleboxD3LimitTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleboxD3LimitTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
