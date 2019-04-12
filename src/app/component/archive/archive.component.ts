import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../entity/BlogPost';
import {BlogService} from '../../service/BlogService';

@Component({
    selector: 'archive',
    templateUrl: 'archive.component.html'
})
export class ArchiveComponent implements OnInit {
    private blogService: BlogService;
    public blogPosts: BlogPost[];


    constructor(blogService: BlogService) {
        this.blogService = blogService;
    }

    ngOnInit(): void {
        this.blogService.fetchAllBlogPosts().subscribe(blogPosts => {
            this.blogPosts = blogPosts;
        });
    }
}
