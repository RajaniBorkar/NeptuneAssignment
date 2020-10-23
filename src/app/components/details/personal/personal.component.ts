import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  dataSkilss=[];
  dataAny:any;
  dob: string;
  email: string;
  phone:string;
  lang:string;
  address: string;
  title: string;
  constructor() { }

  ngOnInit(): void {
    this.dataAny=JSON.parse(localStorage.getItem(localStorage.getItem('selectedKey')));
    this.dob=this.dataAny.dob;
    this.email=this.dataAny.email;
    this.phone=this.dataAny.phone;
    this.lang=this.dataAny.lang;
    this.address=this.dataAny.address;
    this.title=this.dataAny.title;
  }

}
