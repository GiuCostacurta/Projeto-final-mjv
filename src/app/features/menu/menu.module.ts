import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MenuCardComponent,
    MenuListComponent,
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MenuModule { }
