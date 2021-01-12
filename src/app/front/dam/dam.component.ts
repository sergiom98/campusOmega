import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam',
  templateUrl: './dam.component.html',
  styleUrls: ['./dam.component.scss']
})
export class DamComponent implements OnInit {

  // images = [
  //   '/assets/img/blog1.jpg',


  // ]

  constructor() { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
