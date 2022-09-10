import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'register',component:RegisterComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'login',component:LoginComponent},
  {path:'details/:id/:mediatype',canActivate:[AuthGuard],component:AboutComponent},
  {path:'upcoming',canActivate:[AuthGuard],component:UpcomingComponent},
  {path:'nowplaying',canActivate:[AuthGuard],component:NowPlayingComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
