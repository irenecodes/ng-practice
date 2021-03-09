import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import pages 
import {LandingPageComponent} from '../app/pages/landing-page/landing-page.component';
import {SignUpPageComponent} from '../app/pages/sign-up-page/sign-up-page.component';
import {FavouritesPageComponent} from '../app/pages/favourites-page/favourites-page.component';
import {NotFoundPageComponent} from '../app/pages/not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'favourites', component: FavouritesPageComponent },

  
  { path: '**', component: NotFoundPageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
