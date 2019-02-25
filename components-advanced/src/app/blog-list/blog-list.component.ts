import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost("Title 1", "This is a summary of post blog 1"));
    this.blogPosts.push(new BlogPost("Title 2", "This is a summary of post blog 2"));
    this.blogPosts.push(new BlogPost("Title 3", "This is a summary of post blog 3"));
    this.blogPosts.push(new BlogPost("Title 4", "This is a summary of post blog 4"));
    this.blogPosts.push(new BlogPost("Title 5", "This is a summary of post blog 5"));
  }

}
