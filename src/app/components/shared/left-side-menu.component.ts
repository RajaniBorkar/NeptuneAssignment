import {ChangeDetectionStrategy, Component, OnInit, TemplateRef} from '@angular/core';
import { Location } from "@angular/common";
import {Router} from "@angular/router";
import {ProfessionalService} from "../../services/professional.service";

@Component({
  selector: 'app-left-side-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.css']
})
export class LeftSideMenuComponent implements OnInit {
  collapse:boolean;
  isAdmin:boolean;
  activeRoute:number;
  img:any;
  dataAny:any;
  thenBlock: TemplateRef<any>|null = null;
  constructor(location: Location, private router:Router,private professionalService:ProfessionalService) {
    this.collapse=false;
    router.events.subscribe(val => {
      this.activeRoute=1;
      if (location.path() == "/summary") {
        this.activeRoute=1;
      }
      if (location.path() == "/professional") {
        this.activeRoute=2;
      }
      if (location.path() == "/education") {
        this.activeRoute=3;
      }
      if (location.path() == "/skills") {
        this.activeRoute=4;
      }
      if (location.path() == "/personal") {
        this.activeRoute=5;
      }
 if (location.path() == "/portfolio/add") {
        this.activeRoute=6;
      }
 if (location.path() == "/portfolio/list") {
        this.activeRoute=7;
      }

    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('Rajani')==null){
      localStorage.setItem('Rajani', JSON.stringify(this.professionalService.getGlobalData()));
    }
    if(localStorage.getItem('selectedKey')==null){
      localStorage.setItem('selectedKey', 'Rajani');
    }
    this.isAdmin=false;
    this.dataAny=JSON.parse(localStorage.getItem(localStorage.getItem('selectedKey')));
    this.img=this.dataAny.img;
    if(localStorage.getItem('selectedKey')=='Rajani'){
      this.isAdmin=true;
    }
  }

  collapseONOff(){
    this.collapse=!this.collapse;
  }
}
