import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialPageComponent } from './pages/inicial-page/inicial-page.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InicialPageComponent,
    InicialComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InicialModule { }
