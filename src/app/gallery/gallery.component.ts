import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
b1=new Date();
students=['s1','s2','s3'];
  constructor() { }

  ngOnInit(): void {
  }

}
