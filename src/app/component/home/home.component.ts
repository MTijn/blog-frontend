import {Component, OnInit} from '@angular/core';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/blog.service';

const STATE_LAST_BLOGPOST = makeStateKey('lastBlogPost');
const STATE_LAST_BLOGPOST_SCHEMA = makeStateKey('lastBlogPostSchema');


@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
    public blogPost: BlogPost;
    public blogpostSchema: object;

    constructor(private blogService: BlogService, private state: TransferState) {
    }

    ngOnInit() {
        this.blogPost = this.state.get(STATE_LAST_BLOGPOST, <BlogPost>this.blogPost);
        this.blogpostSchema = this.state.get(STATE_LAST_BLOGPOST_SCHEMA, <object>this.blogpostSchema);

        if (this.blogPost === undefined) {
            this.blogService.fetchLastPublishedBlogPost().subscribe(blogPost => {
                this.blogPost = blogPost;
                this.state.set(STATE_LAST_BLOGPOST, <BlogPost>blogPost);
                this.blogpostSchema = {
                    '@context': 'http://schema.org',
                    '@type': 'BlogPosting',
                    'headline': blogPost.title,
                    'datePublished': blogPost.publishedAt,
                    'keywords': blogPost.tags,
                    'url': 'https://martijnklene.nl',
                    'author': blogPost.author,
                    'publisher': {
                        '@type': 'Organization',
                        'name': 'KlenePublishing',
                        'logo': 'https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg'
                    },
                    'image': 'https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg'
                };
                this.state.set(STATE_LAST_BLOGPOST_SCHEMA, <object>this.blogpostSchema);
            });
        }
    }
}