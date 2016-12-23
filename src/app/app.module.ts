import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {PixiTestComponent} from "./pixi-test/pixi-test.component";
import {ballsReducer} from "./reducers/balls.reducer";
import {StoreModule} from "@ngrx/store";
import {BallsStoreService} from "./balls-store.service";
import { BallboxD3Component } from './ballbox-d3/ballbox-d3.component';
import {Routes, RouterModule} from "@angular/router";
import { BallboxPixiComponent } from './ballbox-pixi/ballbox-pixi.component';

const appRoutes: Routes = [
  { path: 'd3', component: BallboxD3Component },
  { path: 'pixi', component: BallboxPixiComponent },
  { path: 'pixi-test', component: PixiTestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PixiTestComponent,
    BallboxD3Component,
    BallboxPixiComponent
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
