import {AppComponent} from './component/main/app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HomeComponent} from './component/home/HomeComponent';
import {HttpClientModule} from '@angular/common/http';
import {ArchiveComponent} from './component/archive/ArchiveComponent';
import {DetailComponent} from './component/detail/DetailComponent';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {NotFoundComponent} from './component/notfound/notfound.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArchiveComponent,
        DetailComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'blog'}),
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'archive', component: ArchiveComponent, pathMatch: 'full'},
            {path: 'detail/:id', component: DetailComponent, pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ]),
        HttpClientModule,
        TransferHttpCacheModule,
        NgxJsonLdModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
