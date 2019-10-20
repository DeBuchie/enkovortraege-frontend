import {RouterReducerState} from "@ngrx/router-store";
import {initalVortragState, VortragState} from "./vortrag.state";

export interface AppState {
  router?: RouterReducerState;
  vortraege: VortragState;
}

export const initialAppState: AppState = {
  vortraege: initalVortragState
};

export function getInitalState(): AppState {
  return initialAppState;
}
