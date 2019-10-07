import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WimltComponent} from "./wimlt/wimlt.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'wimlt', component: WimltComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
