import {Component, OnInit, ElementRef} from '@angular/core';
import {BallSet} from "../models/ball-set";
import {AppState} from "../reducers/AppState";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {BallsStoreService} from "../balls-store.service";
import {ActivatedRoute} from "@angular/router";
import {SET_POSITION_COUNT} from "../reducers/balls.reducer";
import {experimentalEnvironment} from "../models/experimental-environment";

declare const d3: any;

@Component({
  selector: 'app-ballbox-d3',
  template: '<svg></svg>',
  styleUrls: ['./ballbox-d3-limit-transitions.component.css']
})
export class BallboxD3LimitTransitionsComponent implements OnInit {
  private n: number;
  private svg: any;
  private width: number = 500;
  private height: number = 500;
  private oBallSet: Observable<BallSet>;
  private ballSet: BallSet;
  private tLast;


  constructor(public elementRef: ElementRef,
              private store: Store<AppState>,
              private ballStoreService: BallsStoreService,
              private route: ActivatedRoute) {
    this.oBallSet = this.store.select<BallSet>('balls');
  }

  ngOnInit() {
    const self = this;
    this.route.params.subscribe(p => {
      const n = p['n'] || 100;
      experimentalEnvironment.nbBalls = n;
      experimentalEnvironment.leapLength = p['leap'] || 0.1;
      experimentalEnvironment.refreshIntervalMS = p['refresh'] || 1000;

      self.store.dispatch({type: SET_POSITION_COUNT, payload: n})
    })
  }

  ngAfterViewInit() {
    const  self = this;

    const el: HTMLElement = self.elementRef.nativeElement;

    this.svg = d3.select(el).selectAll('svg');
    this.svg
      .attr('height', this.height)
      .attr('width', this.width);
    this.oBallSet.subscribe(bs => {
      self.ballSet = bs;
      self.render()
    })
  }

  render() {
    const self = this;
    self.svg.selectAll('circle')
      .data(self.ballSet.balls, function (b) {
        return b.id;
      })
      .enter()
      .append('circle')
      .attr('r', 2);
    //.style('fill-opacity', 0.5)

    const deltaThres = 2;
    let c1 = 0, c2 = 0;
    self.svg.selectAll('circle')
      .each(function (b) {
        b.delta = Math.max(Math.abs(b.xFrom - b.x) * self.width, Math.abs(b.yFrom - b.y) * self.height);
        if (b.delta <= deltaThres) {
          c1++
        } else {
          c2++
        }
      });
    //console.log(t - self.tLast);
    self.tLast = new Date().getTime();

    /*
     Applies the new attributes (positions).
     This is to be called after a transitions or just straight up
     */

    const fNewAttributes = function (selection) {
      selection.attr('cx', function (b) {
        return self.width * b.x;
      })
        .attr('cy', function (b) {
          return self.height * b.y;
        })
    };

    fNewAttributes(
      self.svg.selectAll('circle')
        .filter(function (b) {
          return b.delta > deltaThres;
        })
        .transition()
        .duration(experimentalEnvironment.refreshIntervalMS)
        .ease(d3.easeLinear)
    );
    fNewAttributes(
      self.svg.selectAll('circle')
        .filter(function (b) {
          return b.delta <= deltaThres;
        })
    );
  }
}
