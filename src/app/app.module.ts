import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {CommonModule} from '@angular/common';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HomeComponent} from './component/home/HomeComponent';
import {ArchiveComponent} from './component/archive/ArchiveComponent';
import {DetailComponent} from './component/detail/DetailComponent';
import {AppComponent} from './component/main/app.component';
import {NotFoundComponent} from './component/notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    ArchiveComponent,
    DetailComponent,
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxJsonLdModule,
    HttpClientModule,
    CommonModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
