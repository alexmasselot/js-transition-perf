import {Injectable} from '@angular/core';
import {AppState} from "./reducers/AppState";
import {Store} from "@ngrx/store";
import {WALK_POSITIONS} from "./reducers/particles.reducer";
import {experimentalEnvironment} from "./models/experimental-environment";

@Injectable()
export class ParticlesStoreService {
  constructor(private store: Store<AppState>) {
    const f = function () {
      setTimeout(function () {
        store.dispatch({type: WALK_POSITIONS});
        f();
      }, experimentalEnvironment.refreshIntervalMS)
    };
    f();
  }

}
