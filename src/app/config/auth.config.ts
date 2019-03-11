import { AuthConfig } from 'angular-oauth2-oidc';
import {environment} from '../../environments/environment';

export const authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: environment.oauth_issuer,

    // URL of the SPA to redirect the user to after login
    redirectUri: environment.oauth_redirect,

    // URL of the SPA to redirect the user after silent refresh
    silentRefreshRedirectUri: environment.oauth_redirect + '/silent-refresh.html',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: environment.oauth_client_id,

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: environment.scope,

    // silentRefreshShowIFrame: true,

    showDebugInformation: true,

    sessionChecksEnabled: false
};