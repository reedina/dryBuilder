import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';

import { BuildsComponent } from './containers/builds/builds.component';

// container
import * as fromContainers from './containers';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component:  fromContainers.BuildsComponent
  }
];
@NgModule({
 imports: [
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forChild(ROUTES)
 ],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers ]
})
export class BuildsModule {}
