import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @ViewChild('one') public headingOne;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.headingOne);
  }

}
