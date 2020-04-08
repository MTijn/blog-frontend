import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    schema = {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        name: 'MartijnKlene.nl',
        url: 'https://martijnklene.nl'
    };
}
