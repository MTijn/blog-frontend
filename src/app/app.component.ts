import {Component, OnInit} from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './config/auth.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public title: string;
    public schema: object;
    public identityClaims: object;

    constructor() {
    }

    ngOnInit(): void {
        this.schema = {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            'name': 'MartijnKlene.nl',
            'url': 'https://martijnklene.nl'
        };
    }
}
