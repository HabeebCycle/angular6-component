import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  //@Input() title: string;
  //@Input() summary: string;
  @Input() post: BlogPost;
  constructor() { }

  ngOnInit() {
    //this.title = "Blog Title";
    //this.summary = "Blog post summary";
  }

}
