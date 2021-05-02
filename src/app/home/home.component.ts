import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  biography: string = 'I\'m a full stack developer with 5 years of experience on developing web application based on chennai.'+
  'I have a Bachelor of Technology degree from Anna university. A side from work, I am also an open source enthusiast and have created' +
  'projects that were listed in GITHUB.My Interest lie in solving problems related to large-scale distributed software systems.';

  resStyle: boolean = false;
  workStyle: boolean = false;
  skillStyle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
