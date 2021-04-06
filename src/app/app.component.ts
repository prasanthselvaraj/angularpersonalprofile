import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title: string = 'personalProfile';
  designation: string = 'Software Engineer / java';
  name: string = 'Prasanth Selvaraj';
  biography: string = 'I\'m a full stack developer with 5 years of experience on developing web application based on chennai.'+
  'I have a Bachelor of Technology degree from Anna university. Aside from work, I am also an open source enthusiast and have created' +
  'projects that were listed in GITHUB.My Interest lie in solving problems related to large-scale distributed software systems.';
  mailInfo: string = 'prasanth10.official@gmail.com';
  callInfo: string = '+91-8760320015';
  
  leftPosition: string;
  homeId: boolean = false;
  resId: boolean = false;
  projId: boolean = false;
  contId: boolean = false;
  resStyle: boolean = false;
  workStyle: boolean = false;
  skillStyle: boolean = false;

  homeMouseOver(): void {
     this.homeId=true;
     this.resId=false;
     this.projId=false;
     this.contId=false;
  }

  resMouseOver(): void {
    this.homeId=false;
     this.resId=true;
     this.projId=false;
     this.contId=false;
  }

  projMouseOver(): void {
    this.homeId=false;
    this.resId=false;
    this.projId=true;
    this.contId=false;
  }

  contMouseOver(): void {
    this.homeId=false;
    this.resId=false;
    this.projId=false;
    this.contId=true;
  }

  homeClick(): void {
    this.leftPosition='36em';
  }

  resClick(): void {
    this.leftPosition='42.5em';
  }

  projClick(): void {
    this.leftPosition='50em';
  }

  contClick(): void {
    this.leftPosition='57.5em';
  }

}
