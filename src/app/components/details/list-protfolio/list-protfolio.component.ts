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
    let j=0;
      for (let i = 0; i<localStorage.length; i++) {
        if(localStorage.key(i)!='selectedKey'){
          archive[j] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          j++;
        }

      }
    this.rowData=archive;
  }
  selctPort(aa){
    localStorage.setItem('selectedKey', aa);
    this.router.navigate(['/summary']);
  }

}
