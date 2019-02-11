import { Component } from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './config/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;

    constructor(private oauthService: OAuthService) {
        this.title = 'app';
        this.configureWithNewConfigApi();
    }

    schema = {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        'name': 'MartijnKlene.nl',
        'url': 'https://martijnklene.nl'
    };

    private configureWithNewConfigApi() {
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    public login() {
        this.oauthService.initImplicitFlow();
    }

    public logoff() {
        this.oauthService.logOut();
    }
}
