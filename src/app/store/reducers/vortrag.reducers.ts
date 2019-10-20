import {initalVortragState, VortragState} from "../state/vortrag.state";
import {VortragActions, VortragActionsEnum} from "../actions/vortrag.actions";

export const vortragReducers = (
  state = initalVortragState,
  action: VortragActions
): VortragState => {
  switch (action.type) {
    case VortragActionsEnum.GetVortraegeSuccess: {
      return {
        ...state,
        vortraege: action.payload
      };
    }
    case VortragActionsEnum.GetVortragSuccess: {
      return {
        ...state,
        selectedVortrag: action.payload
      };
    }
    default:
      return state;
  }
};
