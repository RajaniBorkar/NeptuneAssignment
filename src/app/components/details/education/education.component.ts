import { Component, OnInit } from '@angular/core';
import {EducationService} from "../../../services/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  rowData=[];
  dataAny:any;
  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    // this.rowData = this.educationService.getEducationData();
    this.dataAny=JSON.parse(localStorage.getItem(localStorage.getItem('selectedKey')));
    this.rowData=this.dataAny.education;
  }

}
