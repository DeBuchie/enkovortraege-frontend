import {Action} from "@ngrx/store";
import {Vortrag} from "../../models/Vortrag";

export enum VortragActionsEnum {
  GetVortraege = '[Vortrag] Get Vortraege',
  GetVortraegeSuccess = '[Vortrag] Get Vortraege Success',
  GetVortrag = '[Vortrag] Get Vortrag',
  GetVortragSuccess = '[Vortrag] Get Vortrag Success'
}

export class GetVortraege implements Action {
  public readonly type = VortragActionsEnum.GetVortraege;
}

export class GetVortraegeSuccess implements Action {
  public readonly type = VortragActionsEnum.GetVortraegeSuccess;
  constructor(public payload: Vortrag[]) {}
}

export class GetVortrag implements Action {
  public readonly type = VortragActionsEnum.GetVortrag;
  constructor(public payload: string) {}
}

export class GetVortragSuccess implements Action {
  public readonly type = VortragActionsEnum.GetVortragSuccess;
  constructor(public payload: Vortrag) {}
}

export type VortragActions = GetVortraege | GetVortraegeSuccess | GetVortrag | GetVortragSuccess;

