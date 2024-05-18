import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ConactComponent } from './conact/conact.component';
import { EmploiComponent } from './emploi/emploi.component';
import { PostDetailleComponent } from './post-detaille/post-detaille.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ConactComponent},
    {path: 'emploi', component:EmploiComponent},
    {path: 'post-detaille', component: PostDetailleComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}