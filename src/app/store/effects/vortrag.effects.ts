import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AppState} from "../state/app.state";
import {select, Store} from "@ngrx/store";
import {VortragService} from "../../services/vortrag.service";
import {
  CreateVortrag,
  CreateVortragSuccess,
  GetVortraege,
  GetVortraegeSuccess,
  GetVortrag,
  GetVortragSuccess,
  VortragActionsEnum
} from "../actions/vortrag.actions";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {selectVortragList} from "../selectors/vortrag.selectors";
import {Vortrag} from "../../models/Vortrag";

@Injectable()
export class VortragEffects {
  @Effect()
  getVortrag$ = this.action$.pipe(
    ofType<GetVortrag>(VortragActionsEnum.GetVortrag),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectVortragList))),
    switchMap(([id, vortraege]) => {
      const selectedVortrag = vortraege.filter(vortrag => vortrag.id === id)[0];
      return of(new GetVortragSuccess(selectedVortrag));
    })
  );

  @Effect()
  getVortraege$ = this.action$.pipe(
    ofType<GetVortraege>(VortragActionsEnum.GetVortraege),
    switchMap(() => this.vortragService.getVortraege()),
    switchMap((vortraege: Vortrag[]) => of(new GetVortraegeSuccess(vortraege)))
  );

  @Effect()
  createVortrag$ = this.action$.pipe(
    ofType<CreateVortrag>(VortragActionsEnum.CreateVortrag),
    map(action => action.payload),
    switchMap((vortrag: Vortrag) => this.vortragService.createVortrag(vortrag)),
    switchMap(() => of(new CreateVortragSuccess()))
  );

  constructor(
    private vortragService: VortragService,
    private action$: Actions,
    private store: Store<AppState>
  ) {}
}



