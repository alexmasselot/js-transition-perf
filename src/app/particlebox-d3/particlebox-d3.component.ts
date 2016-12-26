import {Component, OnInit, ElementRef} from '@angular/core';
import {ParticleSet} from "../models/particle-set";
import {AppState} from "../reducers/AppState";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ParticlesStoreService} from "../particles-store.service";
import {ActivatedRoute, Params} from "@angular/router";
import {SET_POSITION_COUNT} from "../reducers/particles.reducer";
import {experimentalEnvironment} from "../models/experimental-environment";

declare const d3: any;

@Component({
  selector: 'app-particlebox-d3',
  template: '<svg></svg>'
})
export class ParticleboxD3Component implements OnInit {
  private n: number;
  private svg: any;
  private width: number = 500;
  private height: number = 500;
  private oParticleSet: Observable<ParticleSet>;
  private particleSet: ParticleSet;
  private tLast;


  constructor(public elementRef: ElementRef,
              private store: Store<AppState>,
              private particleStoreService: ParticlesStoreService,
              private route: ActivatedRoute) {
    this.oParticleSet = this.store.select<ParticleSet>('particles');
  }

  ngOnInit() {
    const self = this;
    this.route.params.subscribe(p => {
      const n = p['n'] || 100;
      experimentalEnvironment.nbParticles = n;
      experimentalEnvironment.leapLength = p['leap'] || 0.1;
      experimentalEnvironment.refreshIntervalMS = p['refresh'] || 1000;

      self.store.dispatch({type: SET_POSITION_COUNT, payload: n})
    })
  }

  ngAfterViewInit() {
    const self = this;

    const el: HTMLElement = self.elementRef.nativeElement;

    this.svg = d3.select(el).selectAll('svg');
    this.svg
      .attr('height', this.height)
      .attr('width', this.width);
    this.oParticleSet.subscribe(bs => {
      self.particleSet = bs;
      self.render()
    })
  }

  render() {
    const self = this;
    self.svg.selectAll('circle')
      .data(self.particleSet.particles, function (b) {
        return b.id;
      })
      .enter()
      .append('circle')
      .attr('r', 2);
    //.style('fill-opacity', 0.5)


    const t = new Date().getTime();
    console.log(t - self.tLast);
    self.tLast = t;
    self.svg.selectAll('circle')
      .transition()
      .duration(experimentalEnvironment.refreshIntervalMS)
      .ease(d3.easeLinear)
      .attr('cx', function (b) {
        return self.width * b.x;
      })
      .attr('cy', function (b) {
        return self.height * b.y;
      });

  }
}
