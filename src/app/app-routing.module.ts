import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RickandmortyComponent} from './rickandmorty/rickandmorty.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'characters', component: RickandmortyComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
