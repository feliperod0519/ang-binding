import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged(currentValue:number){
    if (currentValue%2==1){
      console.log(currentValue)
    }
    else{
      console.log("-->" + currentValue);
    }
  }

}
