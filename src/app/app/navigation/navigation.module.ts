import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionComponent } from './selection/selection.component';
import { BarComponent } from './bar/bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SelectionComponent, BarComponent
  ],exports:[
    SelectionComponent
  ],
})
export class NavigationModule { }
