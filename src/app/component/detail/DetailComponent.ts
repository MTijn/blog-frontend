import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/BlogService';
import {Observable} from 'rxjs/internal/Observable';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-detail',
    templateUrl: 'DetailComponent.html'
})
export class DetailComponent implements OnInit {
    public blogPost: Observable<BlogPost>;
    public blogPostSchema: object;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private titleService: Title
    ) {}

    ngOnInit(): void {
        this.getBlogPost();
    }

    getBlogPost(): void {
        this.blogPost = this.blogService.fetchSingleBlogPostByIdentifier(this.route.snapshot.paramMap.get('id'));
        this.blogPost.toPromise().then(blogPost => {
                this.titleService.setTitle('MartijnKlene.nl | ' + blogPost.title);
                this.blogPostSchema = {
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
            }
        );
    }
}
