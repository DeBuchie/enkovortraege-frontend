import {Component, OnInit} from '@angular/core';
import {AppState} from "./store/state/app.state";
import {select, Store} from "@ngrx/store";
import {GetVortraege} from "./store/actions/vortrag.actions";
import {selectVortragList} from "./store/selectors/vortrag.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'enkoVortraege-frontend';
  vortraege = this.store.pipe(select(selectVortragList));

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(new GetVortraege());
  }

}
