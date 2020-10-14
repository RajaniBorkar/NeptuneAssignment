import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.css']
})
export class LeftSideMenuComponent implements OnInit {
  collapse:boolean;
  constructor( private router:Router) {this.collapse=false; }

  ngOnInit(): void {
  }
  goToSummary() {
    this.router.navigate(['/summary']);
  }
  collapseONOff(){
    this.collapse=!this.collapse;
  }
}
