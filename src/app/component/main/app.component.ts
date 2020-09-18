import {Component} from '@angular/core';
import {JsonLdService} from 'ngx-seo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private readonly jsonLdService: JsonLdService) {
        const jsonLdObject = this.jsonLdService.getObject(
            'Website', {
                name: 'MartijnKlene.nl',
                url: 'https://martijnklene.nl'
            }
        );
        jsonLdService.setData(jsonLdObject);
    }
}
