import { Component, OnInit } from '@angular/core';
import {BlogService} from './service/blog.service';
import {BlogPost} from './entity/BlogPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;

    constructor() {
        this.title = 'app';
    }
}
