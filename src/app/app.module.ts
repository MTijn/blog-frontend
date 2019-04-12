import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, CUSTOM_ELEMENTS_SCHEMA, Inject, NgModule, NO_ERRORS_SCHEMA, PLATFORM_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './component/home/HomeComponent';
import {ArchiveComponent} from './component/archive/archive.component';
import {AppRoutingModule} from './app.routing';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {OAuthModule} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';
import {DetailComponent} from './component/detail/detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArchiveComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
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
