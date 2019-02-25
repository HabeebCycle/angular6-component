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
    this.blogPosts.push(new BlogPost("Title 2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor.<br/>Id semper risus in hendrerit gravida rutrum quisque non tellus. Parturient montes nascetur ridiculus mus. Tortor at auctor urna nunc. Cras adipiscing enim eu turpis egestas. Tincidunt dui ut ornare lectus sit amet est. Eu augue ut lectus arcu bibendum at varius vel. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. At erat pellentesque adipiscing commodo elit at imperdiet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Tempus urna et pharetra pharetra massa massa. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam.<br/>Enim ut sem viverra aliquet eget sit amet tellus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tincidunt praesent semper feugiat nibh sed. Ut lectus arcu bibendum at varius vel pharetra. Risus commodo viverra maecenas accumsan. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Orci eu lobortis elementum nibh tellus molestie nunc non. Libero nunc consequat interdum varius sit amet mattis vulputate. Leo a diam sollicitudin tempor id eu. Semper risus in hendrerit gravida. In pellentesque massa placerat duis ultricies lacus sed. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in.<br/>Viverra vitae congue eu consequat ac felis donec. Nibh sit amet commodo nulla facilisi nullam. Quis varius quam quisque id diam vel quam. Nunc mattis enim ut tellus elementum sagittis vitae. Sit amet consectetur adipiscing elit. Convallis posuere morbi leo urna molestie. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Posuere morbi leo urna molestie at elementum eu. Felis eget velit aliquet sagittis. Vivamus at augue eget arcu dictum varius. Vitae auctor eu augue ut. Feugiat in ante metus dictum at. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi.<br/>Sed cras ornare arcu dui vivamus arcu. Et magnis dis parturient montes nascetur. Urna molestie at elementum eu facilisis sed odio morbi quis. Nibh venenatis cras sed felis. Sodales neque sodales ut etiam. Proin sagittis nisl rhoncus mattis rhoncus. Tincidunt lobortis feugiat vivamus at augue eget. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Luctus accumsan tortor posuere ac. Lectus quam id leo in vitae turpis. In est ante in nibh mauris cursus mattis."));
    this.blogPosts.push(new BlogPost("Title 3", "This is a summary of post blog 3"));
    this.blogPosts.push(new BlogPost("Title 4", "This is a summary of post blog 4"));
    this.blogPosts.push(new BlogPost("Title 5", "This is a summary of post blog 5"));
  }

}
