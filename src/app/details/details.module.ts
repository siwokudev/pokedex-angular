import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralDetailComponent } from './general-detail/general-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, GeneralDetailComponent,
  ], 
  exports: [GeneralDetailComponent],
})
export class DetailsModule { }
