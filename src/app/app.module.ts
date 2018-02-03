import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// not used in production
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

// environment is development
const environment = {
  development: true,
  production: false,
};


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
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
