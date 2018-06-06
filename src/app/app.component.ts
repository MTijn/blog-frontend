import { Component, OnInit } from '@angular/core';
import {BlogService} from './service/blog.service';
import {BlogPost} from './entity/BlogPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
