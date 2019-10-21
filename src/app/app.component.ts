import {Component, OnInit} from '@angular/core';
import {AppState} from "./store/state/app.state";
import {select, Store} from "@ngrx/store";
import {CreateVortrag, GetVortraege} from "./store/actions/vortrag.actions";
import {selectVortragList} from "./store/selectors/vortrag.selectors";
import {FormControl, FormGroup} from "@angular/forms";
import {Vortrag} from "./models/Vortrag";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'enkoVortraege-frontend';
  vortraege = this.store.pipe(select(selectVortragList));

  public form: FormGroup;

  constructor(private store: Store<AppState>){
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.store.dispatch(new GetVortraege());

    this.form = new FormGroup({
      title: new FormControl(''),
      beschreibung: new FormControl(''),
    });
  }

  public onSubmitButtonClick(): void {
    this.store.dispatch(new CreateVortrag(this.form.getRawValue() as Vortrag));
  }

}
