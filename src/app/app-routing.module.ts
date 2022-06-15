import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/HomeComponent';
import {ArchiveComponent} from './component/archive/ArchiveComponent';
import {DetailComponent} from './component/detail/DetailComponent';
import {NotFoundComponent} from './component/notfound/notfound.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'archive', component: ArchiveComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: DetailComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
