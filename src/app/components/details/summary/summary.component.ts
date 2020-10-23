import { Component, OnInit } from '@angular/core';
import {ProfessionalService} from "../../../services/professional.service";
import {parseHtmlGracefully} from "@angular/core/schematics/utils/parse_html";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  name:String;
  last:String;
  summary:String;
  des:String;
  heading:String;
  title:String;
  dataAny:any;
  constructor(private professionalService: ProfessionalService) { }

  ngOnInit(): void {

    if(localStorage.getItem('Rajani')==null){
      localStorage.setItem('Rajani', JSON.stringify(this.professionalService.getGlobalData()));
    }
    if(localStorage.getItem('selectedKey')==null){
      localStorage.setItem('selectedKey', 'Rajani');
    }
    this.dataAny=JSON.parse(localStorage.getItem(localStorage.getItem('selectedKey')));
    this.name=this.dataAny.firstName;
    this.last=this.dataAny.lastName;
    this.des=this.dataAny.currentDes;
    this.heading=this.dataAny.profileHeading;
    this.summary=this.dataAny.summary;
    this.title=this.dataAny.title;




  }

}
