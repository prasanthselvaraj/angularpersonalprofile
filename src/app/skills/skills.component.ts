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
  {position: 2, skill: 'Kafka MQ', weight:3}
];

const CLOUD_PLATFORM_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Pivotal cloud factory', weight:7}
];

const SERVER_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'IBM Liberty server', weight:6},
  {position: 2, skill: 'Tomcat 8.0 Server', weight:9}
];

const TEST_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'API Testing Tool Postman', weight:9},
  {position: 2, skill: 'Junit testing framework', weight:6}
];

const DATABASE_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'MySQL Server Management', weight:8},
  {position: 2, skill: 'IBM Data Studio (DB2)', weight:7}
];

const VERSION_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Git Hub', weight:8},
  {position: 2, skill: 'Git Lab', weight:5}
];

const INTEGRATION_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Jenkins', weight:8}
];

const BUILD_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Gradle', weight:8},
  {position: 2, skill: 'Maven', weight:8}
];

const IDE_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Eclipse', weight:9},
  {position: 2, skill: 'IntelliJ', weight:7},
  {position: 3, skill: 'Visual Studio Code', weight:6}
];

const ARCHI_METHOD_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Microservices', weight:8},
  {position: 2, skill: 'Agile Methodology', weight:7}
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
  testDataSource = TEST_ELEMENT_DATA;
  dbDataSource = DATABASE_ELEMENT_DATA;
  vscDataSource = VERSION_ELEMENT_DATA;
  intDataSource = INTEGRATION_ELEMENT_DATA;
  buildDataSource = BUILD_ELEMENT_DATA;
  ideDataSource = IDE_ELEMENT_DATA;
  archiDataSource = ARCHI_METHOD_ELEMENT_DATA;
}
