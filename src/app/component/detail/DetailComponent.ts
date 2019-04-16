import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/BlogService';
import {Observable} from 'rxjs/internal/Observable';

@Component({
    selector: 'detail',
    templateUrl: 'DetailComponent.html'
})
export class DetailComponent implements OnInit {
    public blogPost: Observable<BlogPost>;
    public blogPostSchema: object;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getBlogPost();
    }

    getBlogPost(): void {
        this.blogPost = this.blogService.fetchSingleBlogPostByIdentifier(this.route.snapshot.paramMap.get('id'));
    }
}
