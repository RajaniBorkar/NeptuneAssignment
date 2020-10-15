import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.css']
})
export class LeftSideMenuComponent implements OnInit {
  collapse:boolean;
  activeRoute:number;
  constructor(location: Location, private router:Router) {
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

    });
  }

  ngOnInit(): void {
  }
  collapseONOff(){
    this.collapse=!this.collapse;
  }
}
