import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
   
 
import { InsertComponent } from './components/insert/insert.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
 {
  path:'',component:DashboardComponent
},{
  path:'home', component:HomeComponent
},
{
  path:'insert',component:InsertComponent
},
{
  path:'update',component:UpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
