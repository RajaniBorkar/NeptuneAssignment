import { Component, OnInit } from '@angular/core';
import {ProfessionalService} from "../../../services/professional.service";

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  rowData=[];
  constructor( private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    this.rowData = this.professionalService.getProfessionalData();
  }

}
