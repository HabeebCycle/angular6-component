import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[][];
  currentPage: number;
  constructor() { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts =
    [
      [
        {
          title: "Post 1",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 2",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 3",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 4",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 5",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        }
      ],
      [
        {
          title: "Post 6",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 7",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 8",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 9",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 10",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        }
      ],
      [
        {
          title: "Post 11",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 12",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 13",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 14",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        },
        {
          title: "Post 15",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque sodales ut etiam sit amet nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ridiculus mus mauris vitae ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies. Odio tempor orci dapibus ultrices in. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
        }
      ]
    ]
  }

  setCurrentPage(page){
    this.currentPage = page;
  }

}
