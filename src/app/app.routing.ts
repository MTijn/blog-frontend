import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './component/home/HomeComponent';
import {ArchiveComponent} from './component/archive/archive.component';
import {NotFoundComponent} from './component/NotfoundComponent';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'archive', component: ArchiveComponent},
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '404'}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
