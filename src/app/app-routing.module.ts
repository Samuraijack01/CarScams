import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent },
  {
    path:'submit',
    component:SubmitComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
