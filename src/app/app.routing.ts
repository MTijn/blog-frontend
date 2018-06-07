import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './component/home/HomeComponent';
import {ArchiveComponent} from './component/archive/archive.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'archive', component: ArchiveComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
