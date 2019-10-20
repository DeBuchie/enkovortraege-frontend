import {Vortrag} from "../../models/Vortrag";

export interface VortragState {
  vortraege: Vortrag[];
  selectedVortrag: Vortrag;
}

export const initalVortragState: VortragState = {
  vortraege: null,
  selectedVortrag: null
};
