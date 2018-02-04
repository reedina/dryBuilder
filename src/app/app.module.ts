import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule, MetaReducer} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers, effects, CustomSerializer} from './store';

// not used in production
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';


import { AppComponent } from './app.component';

// environment is development
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
 ? [storeFreeze]
 : [];

// routes
export const ROUTES: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'builds'},
   { path: 'builds',
     loadChildren: '../builds/builds.module#BuildsModule'
   },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers}),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
