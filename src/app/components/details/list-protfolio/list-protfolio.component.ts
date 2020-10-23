import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-protfolio',
  templateUrl: './list-protfolio.component.html',
  styleUrls: ['./list-protfolio.component.css']
})
export class ListProtfolioComponent implements OnInit {
  rowData=[];
  dataAny:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    debugger;
    let archive = [];
      for (let i = 0; i<localStorage.length; i++) {
        if(localStorage.key(i)!='selectedKey')
      archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
      }
    this.rowData=archive;
  }
  selctPort(aa){
    localStorage.setItem('selectedKey', aa);
    this.router.navigate(['/summary']);
  }

}
