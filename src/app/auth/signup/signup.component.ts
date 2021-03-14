import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

// { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
// { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS } //useValue: 'en-GB'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate = new Date();

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //Formato: dd/MM/yyyy
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}

// declare const MY_FORMATS = {
//   parse: {
//     dateInput: 'LL'
//   },
//   display: {
//     dateInput:'YYYY-MM-DD',
//     monthYearLabel: 'YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'YYYY'
//   }
// };
