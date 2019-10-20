import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {VortragState} from "../state/vortrag.state";

const selectVortraege = (state: AppState) => state.vortraege;

export const selectVortragList = createSelector(
  selectVortraege,
  (state: VortragState) => state.vortraege
);

export const selectSelectedVortrag = createSelector(
  selectVortraege,
  (state: VortragState) => state.selectedVortrag
);
