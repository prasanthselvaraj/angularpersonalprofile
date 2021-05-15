import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  skill: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Java 8', weight:8}
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
  dataSource = ELEMENT_DATA;

}
