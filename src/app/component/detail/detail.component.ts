import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../service/blog.service';
import {ActivatedRoute} from '@angular/router';
import {BlogPost} from '../../entity/BlogPost';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {
    public blogPost: BlogPost;
    public blogPostSchema: object;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getBlogPost();
    }

    getBlogPost(): void {
        this.blogService.fetchSingleBlogPostByIdentifier(this.route.snapshot.paramMap.get('id')).subscribe(
            blogPost => {
                this.blogPost = blogPost;
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
