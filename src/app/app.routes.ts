import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ConactComponent } from './conact/conact.component';
import { EmploiComponent } from './emploi/emploi.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ConactComponent},
    {path: 'emploi', component:EmploiComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}