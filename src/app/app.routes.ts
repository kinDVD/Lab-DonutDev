import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DevComponent } from './components/dev/dev.component';

export const routes: Routes = [
    {path:"Donuts", component:DonutComponent},
    {path:"Dev", component:DevComponent},
    {path:"", redirectTo:"/Donuts", pathMatch:"full"}
];
