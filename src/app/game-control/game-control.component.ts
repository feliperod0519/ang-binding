import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  i: number = 0;
  myInterval: any;
  @Output() change = new EventEmitter<number>();
  

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.myInterval = setInterval(()=>{
      this.i++;
      this.change.emit(this.i);
    },1000);
  }

  stop(){
    clearInterval(this.myInterval);
    this.i=0;
  }

}
