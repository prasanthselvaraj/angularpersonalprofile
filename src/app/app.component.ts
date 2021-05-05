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
  mailInfo: string = 'prasanth10.official@gmail.com';
  callInfo: string = '+91-8760320015';
  
  leftPosition: string;
  homeId: boolean = false;
  resId: boolean = false;
  projId: boolean = false;
  contId: boolean = false;

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
    this.leftPosition='35.4em';
  }

  resClick(): void {
    this.leftPosition='42.3em';
  }

  projClick(): void {
    this.leftPosition='49.5em';
  }

  contClick(): void {
    this.leftPosition='57.1em';
  }

}
