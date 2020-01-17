import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondcmpComponent } from './secondcmp/secondcmp.component';
import { FirstcmpComponent } from './firstcmp/firstcmp.component';


const routes: Routes = [
  { path: 'showAll', component: SecondcmpComponent },
  { path: 'form', component: FirstcmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
