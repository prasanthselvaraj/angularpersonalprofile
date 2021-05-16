import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  skill: string;
  position: number;
  weight: number;
}

const BACK_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Java 8', weight:8}
];

const FRONT_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'HTML 5', weight:7},
  {position: 2, skill: 'Java Script', weight:5},
  {position: 3, skill: 'CSS', weight:7},
  {position: 4, skill: 'Ajax', weight:6}
];

const BACK_FRAMEWORK_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Spring Boot', weight:7},
  {position: 2, skill: 'Spring MVC', weight:7},
];

const FRONT_FRAMEWORK_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Angular 11', weight:4}
];

const MESSAGE_QUEUE_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Rabbit MQ', weight:4},
  {position: 1, skill: 'Kafka MQ', weight:3}
];

const CLOUD_PLATFORM_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Pivotal cloud factory', weight:7}
];

const SERVER_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'IBM Liberty server', weight:6},
  {position: 1, skill: 'Tomcat Server', weight:9}
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'skill', 'weight'];
  backDataSource = BACK_ELEMENT_DATA;
  frontDataSource = FRONT_ELEMENT_DATA;
  bfDataSource = BACK_FRAMEWORK_ELEMENT_DATA;
  ffDataSource = FRONT_FRAMEWORK_ELEMENT_DATA;
  mqDataSource = MESSAGE_QUEUE_ELEMENT_DATA;
  cloudDataSource = CLOUD_PLATFORM_ELEMENT_DATA;
  serverDataSource = SERVER_ELEMENT_DATA;
}
