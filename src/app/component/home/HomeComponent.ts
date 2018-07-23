import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/blog.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [
        './home.component.css'
    ]
})
export class HomeComponent implements OnInit {
    private blogService: BlogService;
    public blogPost: BlogPost;
    public title: string;
    public blogpostSchema: object;

    constructor(blogService: BlogService) {
        this.blogService = blogService;
        this.title = 'app';
    }

    ngOnInit() {
        this.blogService.fetchLastPublishedBlogPost().subscribe(blogPost => {
            this.blogPost = blogPost;
            this.blogpostSchema = {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                'headline': blogPost.title,
                'datePublished': blogPost.publishedAt,
                'keywords': blogPost.tags,
                'url': 'https://martijnklene.nl'
            };
        });
    }
}
