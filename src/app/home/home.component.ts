import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  biography: string = 'I\'m a full stack developer with 5 years of experience on developing web application based on chennai.'+
  'I have a Bachelor of Technology degree from Anna university. A side from work, I am also an open source enthusiast and have created' +
  'projects that were listed in GITHUB.My interest lie in solving problems related to large-scale distributed software systems.';

  resStyle: boolean = false;
  workStyle: boolean = false;
  skillStyle: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    console.log(this.document.location.href);
}
  


}
