import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import {HomeComponent} from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { UserlistComponent } from './pages/userlist/userlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mylist', component: UserlistComponent},
  { path: 'city/:id', component: DetailComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
