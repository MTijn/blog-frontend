// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    api_url: 'https://api.martijnklene.nl',
    oauth_issuer: 'https://login.martijnklene.nl/auth/realms/blog',
    oauth_redirect: 'http://localhost:4200',
    oauth_client_id: 'blog',
    scope: 'openid profile email',
};
