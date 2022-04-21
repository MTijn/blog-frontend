import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/BlogService';
import {Observable} from 'rxjs/internal/Observable';
import {Title} from '@angular/platform-browser';
import {JsonLdService} from 'ngx-seo';
import {WebsiteLdJsonService} from '../../service/WebsiteLdJsonService';

@Component({
    selector: 'app-detail',
    templateUrl: 'DetailComponent.html'
})
export class DetailComponent implements OnInit {
    public blogPost: Observable<BlogPost>;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private titleService: Title,
        private readonly jsonLdService: JsonLdService,
        private jsonLdWebsite: WebsiteLdJsonService
    ) {
    }

    ngOnInit(): void {
        this.getBlogPost();
    }

    getBlogPost(): void {
        this.blogPost = this.blogService.fetchSingleBlogPostByIdentifier(this.route.snapshot.paramMap.get('id'));
        this.blogPost.toPromise().then(blogPost => {
                this.titleService.setTitle('MartijnKlene.nl | ' + blogPost.title);
                const ldData = this.jsonLdService.getObject('BlogPosting',
                    {
                        '@context': 'https://schema.org',
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
                    }
                );
                this.jsonLdService.setData([this.jsonLdWebsite.provideWebsiteLdJsonData(), ldData]);
            }
        );
    }
}
