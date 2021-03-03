import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

import { TopicComponent } from './modules/topic/topic.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'topic',component:TopicComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
