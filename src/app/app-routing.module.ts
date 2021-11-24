import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialPageComponent } from './features/inicial/pages/inicial-page/inicial-page.component';
import { MenuPageComponent } from './features/menu/pages/menu-page/menu-page.component';

const routes: Routes = [
{path: '', component: InicialPageComponent},
{path: 'menu', component: MenuPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
