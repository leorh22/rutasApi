import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'music',
        component: MusicComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
