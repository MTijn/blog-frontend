import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser';
import {isPlatformServer} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private transferState: TransferState, @Inject(PLATFORM_ID) private platformId: any) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.method !== 'GET') {
            return next.handle(request);
        }

        const key: StateKey<string> = makeStateKey<string>(request.url);

        console.log(this.platformId);
        console.log(isPlatformServer(this.platformId));
        if (isPlatformServer(this.platformId)) {
            return next.handle(request).pipe(tap((event) => {
                this.transferState.set(key, (<HttpResponse<any>> event).body);
                console.log(this.transferState.get(key, null));
            }));
        } else {
            const storedResponse = this.transferState.get<any>(key, null);
            if (storedResponse) {
                const response = new HttpResponse({body: storedResponse, status: 200});
                this.transferState.remove(key);
                return of(response);
            } else {
                return next.handle(request);
            }
        }
    }
}
