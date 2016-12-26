import {Component, OnInit, ElementRef} from '@angular/core';
import {ParticleSet} from "../models/particle-set";
import {AppState} from "../reducers/AppState";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {experimentalEnvironment} from "../models/experimental-environment";

declare const d3: any;


@Component({
  selector: 'app-particle-stats',
  template: '<svg></svg>'
})
export class ParticleStatsComponent implements OnInit {
  private svg: any;
  private width: number = 500;
  private height: number = 500;
  private oParticleSet: Observable<ParticleSet>;
  private stats: {};

  constructor(public elementRef: ElementRef,
              private store: Store<AppState>) {
    this.oParticleSet = this.store.select<ParticleSet>('particles');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const self = this;

    const el: HTMLElement = self.elementRef.nativeElement;

    this.svg = d3.select(el).selectAll('svg');
    this.svg
      .attr('height', this.height)
      .attr('width', this.width);
    this.oParticleSet.subscribe(bs => {
      let n = bs.size();
      let x = 0;
      let y = 0;
      bs.particles.forEach(function (b) {
        x += b.x;
        y += b.y;
      });
      x = x / n;
      y = y / n;
      let d = 0;
      bs.particles.forEach(function (b) {
        let dx = b.x - x;
        let dy = b.y - y;
        d += Math.sqrt(dx * dx + dy * dy);
      });
      self.stats = {
        xMean: x,
        yMean: y,
        distSDev: d / n
      };
      self.render();
    });
  }

  render() {
    const self = this;
    self.svg.selectAll('circle')
      .data([self.stats], function () {
        return 1;
      })
      .enter()
      .append('circle')
      .style('fill', 'steelblue')
      .style('fill-opacity', 0.5)
      .style('stroke', 'blue')
      .style('stroke-width', 1);

    self.svg.selectAll('circle')
      .transition()
      .duration(experimentalEnvironment.refreshIntervalMS)
      .attr('r', function (s) {
        return s.distSDev * self.width;
      })
      .attr('cx', function (s) {
        return s.xMean * self.width;
      })
      .attr('cy', function (s) {
        return s.yMean * self.height
      });
    //.style('fill-opacity', 0.5)

  }
}
