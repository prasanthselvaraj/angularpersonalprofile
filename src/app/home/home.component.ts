import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private appComponent:AppComponent) { }

  ngOnInit(): void {
  }

  biography: string = 'I\'m a full stack developer with 5 years of experience on developing web application based on chennai.'+
  'I have a Bachelor of Technology degree from Anna university. A side from work, I am also an open source enthusiast and have created' +
  'projects that were listed in GITHUB.My interest lie in solving problems related to large-scale distributed software systems.';

  resStyle: boolean = false;
  workStyle: boolean = false;
  skillStyle: boolean = false;

  tabClick(tabName : String) {
    switch(tabName) {
      case 'resume':
        this.appComponent.pointer='resume';
         this.appComponent.resId = true;
         this.appComponent.homeId = false;
         this.appComponent.projId = false;
         this.appComponent.skillsId = false;
         this.appComponent.contId = false;
      break;
      case 'work':
        this.appComponent.pointer='project';
        this.appComponent.resId = false;
         this.appComponent.homeId = false;
         this.appComponent.projId = true;
         this.appComponent.skillsId = false;
         this.appComponent.contId = false;
      break;
      case 'skill':
        this.appComponent.pointer='skills';
        this.appComponent.resId = false;
        this.appComponent.homeId = false;
        this.appComponent.projId = false;
        this.appComponent.skillsId = true;
        this.appComponent.contId = false;
      break;
    }    
  }

}
