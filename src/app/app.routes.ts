import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent},
    { path: 'all-countries', component: AllCountriesComponent}
];
