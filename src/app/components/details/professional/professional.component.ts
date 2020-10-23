import { Component, OnInit } from '@angular/core';
import {ProfessionalService} from "../../../services/professional.service";

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  rowData=[];
  dataAny:any;
  constructor( private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    // this.rowData = this.professionalService.getProfessionalData();

    this.dataAny=JSON.parse(localStorage.getItem(localStorage.getItem('selectedKey')));
    this.rowData=this.dataAny.professional;

  }
  gettData(abc){
    return abc;
  }


}
