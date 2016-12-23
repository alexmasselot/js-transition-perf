import {ActionReducer, Action} from '@ngrx/store';
import {BallSet} from "../models/ball-set";
import {experimentalEnvironment} from "../models/experimental-environment";
export const WALK_POSITIONS = 'WALK_POSITIONS';
export const SET_POSITION_COUNT = 'SET_POSITION_COUNT';

export const ballsReducer: ActionReducer<BallSet> = (state: BallSet = new BallSet(1000), action: Action) => {
  switch (action.type) {
    case WALK_POSITIONS:
      return state.walk(experimentalEnvironment.leapLength);
    case SET_POSITION_COUNT:
      return new BallSet(action.payload);
    default:
      return state;
  }
};

