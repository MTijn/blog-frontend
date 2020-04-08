import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../service/BlogService';
import {BlogPost} from '../../entity/BlogPost';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'HomeComponent.html'
})
export class HomeComponent implements OnInit {
    public blogPost: Observable<BlogPost>;
    public blogPostSchema: object;

    public constructor(private blogService: BlogService, private title: Title) {}

    ngOnInit(): void {
        this.title.setTitle('MartijnKlene.nl | Home');
        this.blogPost = this.blogService.fetchLastPublishedBlogPost();
        this.blogPost.toPromise().then(blogPost => {
                this.blogPostSchema = {
                    '@context': 'http://schema.org',
                    '@type': 'BlogPosting',
                    headline: blogPost.title,
                    datePublished: blogPost.publishedAt,
                    keywords: blogPost.tags,
                    url: 'https://martijnklene.nl',
                    author: blogPost.author,
                    publisher: {
                        '@type': 'Organization',
                        name: 'KlenePublishing',
                        logo: 'https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg'
                    },
                    image: 'https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg'
                };
            }
        );
    }
}
