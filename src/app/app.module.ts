import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';
import {NgxJsonLdModule} from 'ngx-json-ld';
import {ArchiveComponent} from './component/archive/archive.component';
import {DetailComponent} from './component/detail/detail.component';
import {AppRoutingModule} from './app.routing';
import {CommonModule} from '@angular/common';
import {HttpInterceptorService} from './service/HttpInterceptor';
import {NgtUniversalModule} from '@ng-toolkit/universal';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArchiveComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        NgtUniversalModule,
        AppRoutingModule,
        HttpClientModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [environment.api_url],
                sendAccessToken: true
            }
        }),
        NgxJsonLdModule,
        TransferHttpCacheModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
