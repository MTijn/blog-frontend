import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';
import {NgxJsonLdModule} from 'ngx-json-ld';
import {ArchiveComponent} from './component/archive/archive.component';
import {DetailComponent} from './component/detail/detail.component';
import {AppRoutingModule} from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArchiveComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        HttpClientModule,
        AppRoutingModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [environment.api_url],
                sendAccessToken: true
            }
        }),
        NgxJsonLdModule,
        TransferHttpCacheModule,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
