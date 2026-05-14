import { Routes } from '@angular/router';
import { SearchLimitsComponent } from './limits/search-limits/search-limits.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LimitsComponent } from './limit-configuration/limits/limits.component';
import { SendLimitComponent } from './limit-configuration/send-limits/send-limits.component';
import { ReceiveLimitComponent } from './limit-configuration/receive-limits/receive-limits.component';

export const routes: Routes = [
    { path: '', redirectTo: 'limits', pathMatch: 'full' },
    {path:'search-limits', component: SearchLimitsComponent},
    {path:'navbar', component: NavbarComponent},
    {path:'limits', component: LimitsComponent},
    {
        path: 'send-limits',
        component: SendLimitComponent
    },
    {
        path: 'receive-limits',
        component: ReceiveLimitComponent
    }
];
