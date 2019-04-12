import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../service/BlogService';
import {BlogPost} from '../../entity/BlogPost';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'HomeComponent.html'
})
export class HomeComponent implements OnInit {
    public blogPost: Observable<BlogPost>;

    public constructor(private blogService: BlogService) {}

    ngOnInit(): void {
        this.blogPost = this.blogService.fetchLastPublishedBlogPost();
    }
}
