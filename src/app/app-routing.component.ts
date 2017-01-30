import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SubjectsComponent} from "./subjects/subjects.component";
import {HomeComponent} from "./home.component";
/**
 * Created by lukas.honke on 30.1.2017.
 */

const routes: Routes =
   [
     {
       path: '',
       redirectTo: '/home',
       pathMatch: 'full'
     },
     {
       path: 'home',
       component: HomeComponent
     },
     {
       path: 'subjects',
       component: SubjectsComponent
     }
   ]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule
{

}
