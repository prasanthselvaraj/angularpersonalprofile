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

}
