import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogPost} from '../entity/BlogPost';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    fetchLastPublishedBlogPost(): Observable<BlogPost> {
        return this.httpClient.get<BlogPost>(environment.api_url + '/v1/blog-posts/last');
    }

    fetchAllBlogPosts(): Observable<BlogPost[]> {
        return this.httpClient.get<BlogPost[]>(environment.api_url + '/v1/blog-posts');
    }

    fetchSingleBlogPostByIdentifier(identifier: string) {
        return this.httpClient.get<BlogPost>(environment.api_url + '/v1/blog-posts/' + identifier);
    }
}
