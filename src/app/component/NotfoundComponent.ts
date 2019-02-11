import {APP_ID, Inject, OnInit, Optional, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {Title} from '@angular/platform-browser';

export class NotFoundComponent {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string,
        @Optional() @Inject(RESPONSE) private response: Response,
        private titleService: Title
    ) {
        this.titleService.setTitle('MartijnKlene.nl - Page not found');
    }
}
