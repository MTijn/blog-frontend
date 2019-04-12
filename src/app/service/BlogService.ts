import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BlogPost} from '../entity/BlogPost';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor(private httpClient: HttpClient) {}

    fetchLastPublishedBlogPost(): Observable<BlogPost> {
        return this.httpClient.get<any>(environment.api_url + '/v1/blog/last');
    }

    fetchAllBlogPosts(): Observable<BlogPost[]> {
        return this.httpClient.get<any[]>(environment.api_url + '/v1/blog/all');
    }

    fetchSingleBlogPostByIdentifier(identifier: String): Observable<BlogPost> {
        return this.httpClient.get<any>(environment.api_url + '/v1/blog/' + identifier);
    }
}
