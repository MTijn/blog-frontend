import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../service/BlogService';
import {BlogPost} from '../../entity/BlogPost';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-archive',
    templateUrl: 'ArchiveComponent.html'
})
export class ArchiveComponent implements OnInit {
    public blogPosts: Observable<BlogPost[]>;

    public constructor(private blogService: BlogService, private titleService: Title) {}

    ngOnInit(): void {
        this.blogPosts = this.blogService.fetchAllBlogPosts();
        this.titleService.setTitle('MartijnKlene.nl | Archive');
    }
}
