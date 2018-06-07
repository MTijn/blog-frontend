import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/blog.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
    private blogService: BlogService;
    public blogPost: BlogPost;
    public title: string;

    constructor(blogService: BlogService) {
        this.blogService = blogService;
        this.title = 'app';
    }

    ngOnInit() {
        this.blogService.fetchLastPublishedBlogPost().subscribe(blogPost => {
            this.blogPost = blogPost;
        });
    }
}
