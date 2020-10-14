import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  dataSkilss=['HTML','CSS','JavaScript','Angular','Jquery','Bootstrap','Core Java']
  constructor() { }

  ngOnInit(): void {
  }

}
