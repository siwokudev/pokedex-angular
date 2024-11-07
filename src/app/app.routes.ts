import { Routes } from '@angular/router';
import { GeneralDetailComponent } from './details/general-detail/general-detail.component';

export const routes: Routes = [{
    path:"details/:id",
    component: GeneralDetailComponent,
},{path: '**',  
    redirectTo: '', pathMatch: "full"
}];
