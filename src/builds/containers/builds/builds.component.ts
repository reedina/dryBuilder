import { Component, OnInit } from '@angular/core';
import { Packer } from '../../models/packer.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
  styleUrls: ['builds.component.css'],
  template: `
    <div>Hello from builds component</div>
  `
})
export class BuildsComponent  implements OnInit {

  constructor(private store: Store<fromStore.BuildState>) {}

  ngOnInit() {
     console.log(this.store.select('packer'));
  }
}
