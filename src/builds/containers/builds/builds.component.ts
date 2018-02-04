import { Component, OnInit } from '@angular/core';
import { Packer } from '../../models/packer.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
  styleUrls: ['builds.component.css'],
  template: `
    <div>Hello from builds component</div>
    <div *ngFor="let p of (packer$ | async)">
         {{p.builders[0].access_key}} <br>
         {{p.builders[0].secret_key}}  <br>
        {{ p.builders[0].source_ami_filter.filters.name}} <br>

    </div>
  `
})
export class BuildsComponent  implements OnInit {

  packer$: Observable<Packer[]>;

  constructor(private store: Store<fromStore.BuildState>) {}

  ngOnInit() {
     console.log(this.store.select('packer'));
     this.packer$ = this.store.select(fromStore.getPackerEntities);
  }
}
