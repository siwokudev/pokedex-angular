import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralDetailComponent } from './general-detail/general-detail.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, GeneralDetailComponent
  ], 
  exports: [GeneralDetailComponent],
  providers: [provideCharts(withDefaultRegisterables())]
})
export class DetailsModule { }
