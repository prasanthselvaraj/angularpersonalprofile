import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  professionalInfo : String = 'As a software development engineer worked on various projects.'+
  ' Generally, I will be designing, developing, testing and delivering large-scale systems and'+
  ' I will be also gathering and analysing business requirements and transforming them into solutions.'+
  'With 5 years of experience and deep understanding of many technical subjects I love to be creative and inventive';

  designation : String = 'Software Engineer';
  year: String = '2019 - present';
  presentCompany: String = 'Currently working for Ford Motor Company Asia Pacific as Software Engineer from September 2019'+
  ' which provides best environment for learning, innovation and business growth on automobile industry.';
}
