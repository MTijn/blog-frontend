import {Injectable} from '@angular/core';
import {JsonLdService} from 'ngx-seo';
import {JsonLd} from 'ngx-seo/lib/json-ld';

@Injectable({
    providedIn: 'root'
})
export class WebsiteLdJsonService {
    constructor(private readonly jsonLdService: JsonLdService) {
    }

    provideWebsiteLdJsonData(): JsonLd {
        return this.jsonLdService.getObject(
            'Website', {
                name: 'MartijnKlene.nl',
                url: 'https://martijnklene.nl'
            });
    }
}
