import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { AssociateComponent } from './component/associate/associate.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'card',component:CardComponent},
  {path:'table',component:TableComponent},
  {path:'associate',component:AssociateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
