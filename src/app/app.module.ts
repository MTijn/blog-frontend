import {AppComponent} from './component/main/app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HomeComponent} from './component/home/HomeComponent';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'blog'}),
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
        ]),
        TransferHttpCacheModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
