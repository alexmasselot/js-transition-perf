import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ballsReducer} from "./reducers/balls.reducer";
import {StoreModule} from "@ngrx/store";
import {BallsStoreService} from "./balls-store.service";
import { BallboxD3Component } from './ballbox-d3/ballbox-d3.component';
import {Routes, RouterModule} from "@angular/router";
import { BallboxPixiComponent } from './ballbox-pixi/ballbox-pixi.component';
import { BallboxD3LimitTransitionsComponent } from './ballbox-d3-limit-transitions/ballbox-d3-limit-transitions.component';
import { BallboxPixiTailComponent } from './ballbox-pixi-tail/ballbox-pixi-tail.component';
import { BallboxPixiD3Component } from './ballbox-pixi-d3/ballbox-pixi-d3.component';
import { BallStatsComponent } from './ball-stats/ball-stats.component';
import { FrontPageComponent } from './front-page/front-page.component';

const appRoutes: Routes = [
  { path: 'd3', component: BallboxD3Component },
  { path: 'd3-limit-transitions', component: BallboxD3LimitTransitionsComponent },
  { path: 'pixi', component: BallboxPixiComponent },
  { path: 'pixi-tail', component: BallboxPixiTailComponent },
  { path: 'pixi-d3', component: BallboxPixiD3Component },
  { path: '**', component: FrontPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BallboxD3Component,
    BallboxPixiComponent,
    BallboxD3LimitTransitionsComponent,
    BallboxPixiTailComponent,
    BallboxPixiD3Component,
    BallStatsComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({balls: ballsReducer}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BallsStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
