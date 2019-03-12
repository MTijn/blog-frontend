import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './component/home/HomeComponent';
import {ArchiveComponent} from './component/archive/archive.component';
import {ROUTING} from './app.routing';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {OAuthModule} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';
import {DetailComponent} from './component/detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArchiveComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'blog'}),
        HttpClientModule,
        ROUTING,
        MDBBootstrapModule.forRoot(),
        NgxJsonLdModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [environment.api_url],
                sendAccessToken: true
            }
        })
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})

export class AppModule {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string) {
    }
}
