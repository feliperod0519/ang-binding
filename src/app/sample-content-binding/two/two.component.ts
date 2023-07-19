import { Component, ContentChild, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  @ContentChild('two') public headingTwo;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    console.log(this.headingTwo);
  }

}
