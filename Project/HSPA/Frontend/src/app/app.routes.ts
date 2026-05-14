import { Routes } from '@angular/router';
import { PropertyList } from './property/property-list/property-list';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const routes: Routes = [
    {path : '', component: PropertyList},
    {path : 'rent-property', component: PropertyList},
    {path : 'add-property', component: AddPropertyComponent},
    {path : 'property-detail/:id', component: PropertyDetailComponent},
    {path : 'user/login', component: UserLoginComponent},
    {path : 'user/register', component: UserRegisterComponent},
    {path : '**', component: PropertyList}

];
