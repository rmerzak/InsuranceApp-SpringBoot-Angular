import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { TabComponent } from './component/tab/tab.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'card',component:CardComponent},
  {path:'table',component:TabComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
