import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {particlesReducer} from "./reducers/particles.reducer";
import {StoreModule} from "@ngrx/store";
import {ParticlesStoreService} from "./particles-store.service";
import { ParticleboxD3Component } from './particlebox-d3/particlebox-d3.component';
import {Routes, RouterModule} from "@angular/router";
import { ParticleboxPixiComponent } from './particlebox-pixi/particlebox-pixi.component';
import { ParticleboxD3LimitTransitionsComponent } from './particlebox-d3-limit-transitions/particlebox-d3-limit-transitions.component';
import { ParticleboxPixiTailComponent } from './particlebox-pixi-tail/particlebox-pixi-tail.component';
import { ParticleboxPixiD3Component } from './particlebox-pixi-d3/particlebox-pixi-d3.component';
import { ParticleStatsComponent } from './particle-stats/particle-stats.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ParticleboxD3CssTransitionsComponent } from './particlebox-d3-css-transitions/particlebox-d3-css-transitions.component';
import { ParticleboxDivD3CssTransitionsComponent } from './particlebox-div-d3-css-transitions/particlebox-div-d3-css-transitions.component';

const appRoutes: Routes = [
  { path: 'd3', component: ParticleboxD3Component },
  { path: 'd3-limit-transitions', component: ParticleboxD3LimitTransitionsComponent },
  { path: 'css', component: ParticleboxD3CssTransitionsComponent },
  { path: 'css-div', component: ParticleboxDivD3CssTransitionsComponent},
  { path: 'pixi', component: ParticleboxPixiComponent },
  { path: 'pixi-tail', component: ParticleboxPixiTailComponent },
  { path: 'pixi-d3', component: ParticleboxPixiD3Component },
  { path: '**', component: FrontPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ParticleboxD3Component,
    ParticleboxPixiComponent,
    ParticleboxD3LimitTransitionsComponent,
    ParticleboxPixiTailComponent,
    ParticleboxPixiD3Component,
    ParticleStatsComponent,
    FrontPageComponent,
    ParticleboxD3CssTransitionsComponent,
    ParticleboxDivD3CssTransitionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({particles: particlesReducer}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ParticlesStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
