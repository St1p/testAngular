import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatCardModule,
         MatCheckboxModule,
         MatGridListModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';

const appRoutes: Routes = [
   // { path: 'crisis-center', component: CrisisListComponent },
    { path: 'film/:id',      component: FilmDetailsComponent },
    { path: 'film-list',          component: HomeComponent },
    { path: 'film-list/page/:page',    component: HomeComponent  //data: { title: 'Heroes List' }
    },
    { path: '',   redirectTo: '/film-list', pathMatch: 'full'},
    { path: '**', redirectTo: '/film-list' }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, FilmDetailsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      HttpModule,
      //material
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatCheckboxModule,
      MatGridListModule,
      //bootstrap
      NgbModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: false } // <-- debugging purposes only
      )

  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
