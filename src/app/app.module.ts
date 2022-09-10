import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

FormsModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    NetworksComponent,
    NotfoundComponent,
    NavComponent,
    SearchPipe,
    UpcomingComponent,
    NowPlayingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
