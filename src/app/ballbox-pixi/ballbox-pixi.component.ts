import {Component, OnInit, ElementRef} from '@angular/core';
import {Observable} from "rxjs";
import {BallSet} from "../models/ball-set";
import {Store} from "@ngrx/store";
import {AppState} from "../reducers/AppState";
import {BallsStoreService} from "../balls-store.service";
import {ActivatedRoute} from "@angular/router";
import {SET_POSITION_COUNT} from "../reducers/balls.reducer";
import {experimentalEnvironment} from "../models/experimental-environment";

declare const PIXI: any;

@Component({
  selector: 'app-ballbox-pixi',
  template: '<div></div>',
  styleUrls: ['./ballbox-pixi.component.css']
})
export class BallboxPixiComponent implements OnInit {
  private width: number = 500;
  private height: number = 500;
  private oBallSet: Observable<BallSet>;
  private ballSet: BallSet;
  private el: HTMLElement;
  private stage: any;
  private renderer: any;
  private graphics = [];
  private tLast:number;

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
    const self = this;

    self.el = self.elementRef.nativeElement;

    this.oBallSet.subscribe(bs => {
      self.ballSet = bs;
      self.render()
    })
  }

  render() {
    const self = this;

    if (self.renderer === undefined) {
      self.renderer = PIXI.autoDetectRenderer(self.width, self.height, {
        antialias: true,
        transparent: true,
        resolution: 1
      });
      self.renderer.view.style.border = "1px dashed black";
      //self.renderer.backgroundColor = 0x061639;

      self.el.appendChild(self.renderer.view);
      self.stage = new PIXI.Container();

      self.ballSet.balls.forEach(function () {
        const g = new PIXI.Graphics();
        g.beginFill(0xe74c3c);
        g.drawCircle(0, 0, 2);
        self.graphics.push(g);
        g.endFill();
        self.stage.addChild(g);
      })
    }
    const tFrom = new Date().getTime();
    console.log(tFrom-self.tLast);
    self.tLast = tFrom;
    const n = self.ballSet.size();
    for (let i = 0; i < n; i++) {
      let g = self.graphics[i];
      let b = self.ballSet.get(i);
      let xp = b.x * self.width;
      let yp = b.y * self.height;
      g.xFrom = g.x || xp;
      g.yFrom = g.y || yp;
      g.xTo = xp;
      g.yTo = yp;
    }
    const animate = function () {
      const tRatio = (new Date().getTime() - tFrom) / experimentalEnvironment.refreshIntervalMS;
      if(tRatio>1){
        return;
      }
      for (let i = 0; i < n; i++) {
        let g = self.graphics[i];
        g.x = g.xFrom + tRatio * (g.xTo - g.xFrom);
        g.y = g.yFrom + tRatio * (g.yTo - g.yFrom);
      }
      self.renderer.render(self.stage);
      requestAnimationFrame(animate);
    };
    animate();


    // Set the fill color

  }

}
