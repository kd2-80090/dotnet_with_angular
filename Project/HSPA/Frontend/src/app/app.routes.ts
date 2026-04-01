import { Routes } from '@angular/router';
import { PropertyList } from './property/property-list/property-list';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

export const routes: Routes = [
    {path : '', component: PropertyList},
    {path : 'rent-property', component: PropertyList},
    {path : 'add-property', component: AddPropertyComponent},
    {path : 'property-detail/:id', component: PropertyDetailComponent}
];
