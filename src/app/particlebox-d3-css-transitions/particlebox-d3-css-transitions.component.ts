import {Component, OnInit, ElementRef} from '@angular/core';
import {experimentalEnvironment} from "../models/experimental-environment";
import {SET_POSITION_COUNT} from "../reducers/particles.reducer";
import {ParticlesStoreService} from "../particles-store.service";
import {AppState} from "../reducers/AppState";
import {Store} from "@ngrx/store";
import {ParticleSet} from "../models/particle-set";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

declare const d3:any;
@Component({
  selector: 'app-particlebox-d3-css-transitions',
  template: '<svg></svg>'
})
export class ParticleboxD3CssTransitionsComponent implements OnInit {
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
      .attr('r', 2)
      .attr('cx', 0)
      .attr('cy', 0)
      .style('transition-timing-function','linear')
      .style('transition-duration', experimentalEnvironment.refreshIntervalMS+'ms')

    const t = new Date().getTime();
    console.log(t - self.tLast);
    self.tLast = t;
    self.svg.selectAll('circle')
      .style('transform', function(b){
        return 'translate('+(self.width * b.x)+'px, '+(self.height * b.y)+'px)';
      })

  }
}
