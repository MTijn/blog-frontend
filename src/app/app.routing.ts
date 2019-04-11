import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {HomeComponent} from './component/home/home.component';
import {ArchiveComponent} from './component/archive/archive.component';
import {DetailComponent} from './component/detail/detail.component';

const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'archive', component: ArchiveComponent},
    { path: 'detail/:id', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
