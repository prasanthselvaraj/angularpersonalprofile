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
}
