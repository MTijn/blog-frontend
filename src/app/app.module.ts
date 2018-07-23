import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './component/home/HomeComponent';
import {ArchiveComponent} from './component/archive/archive.component';
import {ROUTING} from './app.routing';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArchiveComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'blog'}),
        HttpClientModule,
        ROUTING,
        MDBBootstrapModule.forRoot(),
        NgxJsonLdModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ?
            'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
