import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ConactComponent } from './conact/conact.component';
import { EmploiComponent } from './emploi/emploi.component';
import { PostDetailleComponent } from './post-detaille/post-detaille.component';
import { PostProfileComponent } from './post-profile/post-profile.component';
import { FreProfileComponent } from './fre-profile/fre-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchFreComponent } from './search-fre/search-fre.component';
export const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ConactComponent},
    {path: 'travail', component:EmploiComponent},
    {path: 'post-detail', component: PostDetailleComponent},
    {path: 'post-profile', component: PostProfileComponent},
    {path: 'fre_profile', component:FreProfileComponent},
    { path: 'freelincing_profile', component: ProfileComponent},
    { path: 'profile', component:ProfileComponent},
    {path: 'search', component:SearchFreComponent}

];



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}