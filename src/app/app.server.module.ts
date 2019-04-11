import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'blog'}),
        AppModule,
        ServerModule,
        NoopAnimationsModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule,
    ],
    // Since the bootstrapped component is not inherited from your
    // imported AppModule, it needs to be repeated here.
    bootstrap: [AppComponent],
})
export class AppServerModule {
}
