import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/BlogService';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
    public blogPost: BlogPost;
    public blogpostSchema: object;

    constructor(private blogService: BlogService) {
    }

    async ngOnInit() {
        this.blogPost = await this.blogService.fetchLastPublishedBlogPost().toPromise();

        this.blogpostSchema = {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            'headline': this.blogPost.title,
            'datePublished': this.blogPost.publishedAt,
            'keywords': this.blogPost.tags,
            'url': 'https://martijnklene.nl',
            'author': this.blogPost.author,
            'publisher': {
                '@type': 'Organization',
                'name': 'KlenePublishing',
                'logo': 'https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg'
            },
            'image': 'https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg'
        };
    }
}
