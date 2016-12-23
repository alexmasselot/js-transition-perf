import {Component, OnInit, ElementRef} from '@angular/core';
import {AppState} from "../reducers/AppState";
import {Store} from "@ngrx/store";
import {BallSet} from "../models/ball-set";
import {Observable} from "rxjs";
import {BallsStoreService} from "../balls-store.service";

declare var PIXI:any;
@Component({
  selector: 'app-pixi-test',
  templateUrl: './pixi-test.component.html',
  styleUrls: ['./pixi-test.component.css']
})
export class PixiTestComponent implements OnInit {
  private oBallSet: Observable<BallSet>;
  private width: number = 500;
  private height: number = 500;


  constructor(private elementRef: ElementRef, private store: Store<AppState>, private ballStoreService:BallsStoreService) {
    this.oBallSet = this.store.select<BallSet>('balls');
    console.log('PIXI', PIXI)
  }

  ngOnInit() {
    console.log('PixiTestComponent, ngOnInit', this.store)

    this.oBallSet.subscribe(
      s => {
      },
      e => console.error(e),
      () => console.error('WTF')
    );


  }

  ngAfterViewInit() {
    var self = this;

    var el: HTMLElement = self.elementRef.nativeElement;
    var renderer = PIXI.autoDetectRenderer(self.width, self.height);
    renderer.view.style.border = "1px dashed black";
    renderer.backgroundColor = 0x061639;

    el.appendChild(renderer.view);
    var stage = new PIXI.Container();

    var g1 = new PIXI.Graphics();
    g1.beginFill(0xe74c3c); // Red
    g1.drawCircle(250, 230, 40); // drawCircle(x, y, radius)
    g1.endFill();
    stage.addChild(g1);
    var g2 = new PIXI.Graphics();
    g2.beginFill(0xe74c3c); // Red
    g2.drawCircle(250, 270, 40); // drawCircle(x, y, radius)
    g2.endFill();
    stage.addChild(g2);

    renderer.render(stage);
    setTimeout(function(){
      g1.x=100;
      g1.y=150;
      g2.x=-100;
      g2.y=-150;
      renderer.render(stage);

    },2000)
  }
}
