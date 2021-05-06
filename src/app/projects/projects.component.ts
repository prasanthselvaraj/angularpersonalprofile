import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projOneTitle: String = "Project Name";
  projNameOne: String = "OVS (Optimized Vehicle scheduling)";
  projNameTwo: String = "OSS (Optessa scheduling and Sequencing)";
  projOneDesc: String = "Project Description";
  projDescOne: String = 'OVS & OSS is a part of \"Order to delivery\" system which handles the scheduling and'+
  ' sequencing of unplanned orders based on several constraints, allocations and order life cycle.';
  projDescTwo: String = 'It’s helpful in tracking the vehicle under manufacturing process until generating the vehicle'+
  ' identification number and dispatched out of the production plant.';

  imageObject = [{
      image: '/assets/ford_1.jpg',
      thumbImage: '/assets/ford_1.jpg',
      title: 'FORD MOTORS'
  }, {
    image: '/assets/ford_1.jpg',
    thumbImage: '/assets/ford_2.jpg',
    title: 'FORD MOTORS'
  }, {
    image: '/assets/ford_1.jpg',
    thumbImage: '/assets/ford_3.jpg',
    title: 'FORD MOTORS'
  },{
    image: '/assets/ford_1.jpg',
    thumbImage: '/assets/ford_4.jpg',
    title: 'FORD MOTORS'
  }, {
    image: '/assets/ford_1.jpg',
    thumbImage: '/assets/ford_5.jpg',
    title: 'FORD MOTORS'
  }];
}
