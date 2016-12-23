import {Component, OnInit, ElementRef} from '@angular/core';
import {BallSet} from "../models/ball-set";
import {AppState} from "../reducers/AppState";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {BallsStoreService} from "../balls-store.service";
import {ActivatedRoute, Params} from "@angular/router";
import {SET_POSITION_COUNT} from "../reducers/balls.reducer";
import {experimentalEnvironment} from "../models/experimental-environment";

declare var d3: any;

@Component({
  selector: 'app-ballbox-d3',
  template: '<svg></svg>',
  styleUrls: ['./ballbox-d3.component.css']
})
export class BallboxD3Component implements OnInit {
  private n: number
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
    var self = this;
    this.route.params.subscribe(p => {
      var n = p['n'] || 100;
      experimentalEnvironment.nbBalls=n;
      experimentalEnvironment.leapLength = p['leap'] || 0.1;
      experimentalEnvironment.refreshIntervalMS = p['refresh'] || 300;

      self.store.dispatch({type: SET_POSITION_COUNT, payload: n})
    })
  }

  ngAfterViewInit() {
    var self = this;

    var el: HTMLElement = self.elementRef.nativeElement;

    this.svg = d3.select(el).selectAll('svg');
    this.svg
      .attr('height', this.height)
      .attr('width', this.width)
    this.oBallSet.subscribe(bs => {
      self.ballSet = bs;
      self.render()
    })
  }

  render() {
    var self = this;
    self.svg.selectAll('circle')
      .data(self.ballSet.balls, function (b) {
        return b.id;
      })
      .enter()
      .append('circle')
      .attr('r', 2);

    var t = new Date().getTime();
    console.log(t-self.tLast);
    self.tLast = t;
    self.svg.selectAll('circle')
      .transition()
      .duration(experimentalEnvironment.refreshIntervalMS)
      .ease(d3.easeLinear)
      .attr('cx', function (b,i) {
        return self.width * b.x;
      })
      .attr('cy', function (b) {
        return self.height * b.y;
      })
  }
}
