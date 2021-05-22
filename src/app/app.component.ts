import { Component, OnInit } from '@angular/core';
import {slideInAnimation} from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.pointer='home';
    this.homeId=true;
  }
  
  designation: string = 'Software Engineer / java';
  name: string = 'Prasanth Selvaraj';
  
  pointer: string;
  homeId: boolean = false;
  resId: boolean = false;
  projId: boolean = false;
  skillsId: boolean = false;
  contId: boolean = false;

  homeMouseOver(): void {
     this.homeId=true;
  }

  resMouseOver(): void {
     this.resId=true;
  }

  projMouseOver(): void {
    this.projId=true;
  }

  skillsMouseOver(): void {
    this.skillsId=true;
  }

  contMouseOver(): void {
    this.contId=true;
  }

  homeClick(): void {
    this.pointer='home';
    this.resId=false;
    this.projId=false;
    this.skillsId=false;
    this.contId=false;
  }

  resClick(): void {
    this.pointer='resume';
    this.homeId=false;
    this.projId=false;
    this.skillsId=false;
    this.contId=false;
  }

  projClick(): void {
    this.pointer='project';
    this.homeId=false;
    this.resId=false;
    this.skillsId=false;
    this.contId=false;
  }

  skillsClick(): void {
    this.pointer='skills';
    this.homeId=false;
    this.resId=false;
    this.projId=false;
    this.contId=false;
  }

  contClick(): void {
    this.pointer='contact';
    this.homeId=false;
    this.resId=false;
    this.projId=false;
    this.skillsId=false;
  }

  mouseLeave(): void {
    switch(this.pointer){
       case 'home':
        this.homeId=true;
        this.resId=false;
        this.projId=false;
        this.skillsId=false;
        this.contId=false;
       break;
       case 'resume':
        this.homeId=false;
        this.resId=true;
        this.projId=false;
        this.skillsId=false;
        this.contId=false;
       break;
       case 'project':
        this.homeId=false;
        this.resId=false;
        this.projId=true;
        this.skillsId=false;
        this.contId=false;
       break;
       case 'skills':
        this.homeId=false;
        this.resId=false;
        this.projId=false;
        this.skillsId=true;
        this.contId=false;
       break;
       case 'contact':
        this.homeId=false;
        this.resId=false;
        this.projId=false;
        this.skillsId=false;
        this.contId=true;
       break;
    }
  }
}
