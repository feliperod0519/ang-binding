import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged(currentValue:number){
    if (currentValue%2==0){
      console.log(currentValue)
    }
  }
}
