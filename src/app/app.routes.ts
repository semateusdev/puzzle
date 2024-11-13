import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:() => import('./levels/level-1/level-1.component').then(c => c.Level1Component)
    }
];
