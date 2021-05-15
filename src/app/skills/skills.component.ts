import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  skill: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, skill: 'Hydrogen'},
  {position: 2, skill: 'Helium'},
  {position: 3, skill: 'Lithium'},
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

  displayedColumns: string[] = ['position', 'skill'];
  dataSource = ELEMENT_DATA;

}
