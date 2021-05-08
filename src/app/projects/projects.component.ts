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
  projOneDB: String = 'Data Base';
  projectDBPara: String = 'IBM Data Studio, MYSQL Server management Studio.';
  projOneServer: String = "Cloud & Server's";
  projectServerPara: String = 'Pivotal Cloud Factory, IBM Liberty Server, Tomcat Server';
  projOneTech: String = 'Technologies';
  projectTechPara: String = 'JAVA 8, Angular, Java Script, HTML 5, CSS, Spring boot, Junit, Jenkins, Kafka, Rabbit MQ, PCF, Postman,'+ 
  ' Restful Services.';
  projRespHead: String = 'Responsibility'
  projRespOne: String = 'Developing RESTful Microservices based web application (OSS) using Spring Boot framework and the above mentioned technologies'+
  '. Its used by the schedulers for the process of scheduling and sequencing.'
  projRespTwo: String = 'Junit, integration and regression testing is done Junit frame work, POSTMAN and a bit of understanding on selenium.'
  projRespThree: String = 'Deploying the developed microservices into PCF servers using CI / CD tools like GIT and Jenkins.';
  projRespFour: String = 'Supporting and rectifying the production supports issues on developed applications to meet the business needs.';

  fordImageObject = [{
      image: '/assets/ford_1.jpg',
      thumbImage: '/assets/ford_1.jpg',
      title: 'FORD MOTORS'
  }, {
    image: '/assets/ford_2.jpg',
    thumbImage: '/assets/ford_2.jpg',
    title: 'FORD MOTORS'
  }, {
    image: '/assets/ford_3.jpg',
    thumbImage: '/assets/ford_3.jpg',
    title: 'FORD MOTORS'
  },{
    image: '/assets/ford_4.jpg',
    thumbImage: '/assets/ford_4.jpg',
    title: 'FORD MOTORS'
  }, {
    image: '/assets/ford_5.jpg',
    thumbImage: '/assets/ford_5.jpg',
    title: 'FORD MOTORS'
  }];

  projDetail: String = 'HUE (High Usability Enterprise)';
  proj2DescOne: String = 'HUE is an enterprise consumer product enriched with AI Works that reduce the burden and time for user'+
  ' Inputs and meets the business needs of customers in regions of Human Resource, Supply Chain Management, Accounts and other management'+
  ' systems.';
  proj2DescTwo: String = 'Screen’s: Balances Management, Notes Receivable Management, Collection Management.';
  project2DBPara: String = 'MySQL Workbench.';
  project2TechPara: String = 'JAVA 8, Java Script, XML, HTML, CSS, AJAX, Spring MVC, GIT Lab, Jenkins';
  proj2RespOne: String = 'Developing web application ERP product based on Spring MVC Frame work using the above technologies.';
  proj2RespTwo: String = 'Perform code reviews based on defined standards and verified with the code review tools such as Sonar-Cube and Sonar-Lint (Code review tools).';
  proj2RespThree: String = 'Worked with team of 4 co-ordinated to merge and manage codes under version control system (GitLab),'+
  ' troubleshoot and resolved Critical and UI bugs raised by testing and support teams to deliver flawless product to customers.'

  ivtlImageObject =  [{
    image: '/assets/Ivtl_1.jpg',
    thumbImage: '/assets/Ivtl_1.jpg',
    title: 'IVTL Infoview Technologies'
}, {
  image: '/assets/Ivtl_2.jpg',
  thumbImage: '/assets/Ivtl_2.jpg',
  title: 'IVTL Infoview Technologies'
}, {
  image: '/assets/Ivtl_3.jpg',
  thumbImage: '/assets/Ivtl_3.jpg',
  title: 'IVTL Infoview Technologies'
},{
  image: '/assets/Ivtl_4.jpg',
  thumbImage: '/assets/Ivtl_4.jpg',
  title: 'IVTL Infoview Technologies'
}, {
  image: '/assets/Ivtl_5.jpg',
  thumbImage: '/assets/Ivtl_5.jpg',
  title: 'IVTL Infoview Technologies'
}];
}
