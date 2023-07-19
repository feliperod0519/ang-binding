import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()blueprintCreated = new EventEmitter<{blueprintName:string,blueprintContent:string}>();
  @ViewChild('serverNameInput',{static:true}) serverName: ElementRef;
  @ViewChild('serverContentInput',{static:true}) content: ElementRef;

  serverElements = [];
  //newServerName = '';
  //newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({
      serverName: this.serverName.nativeElement.value,//serverNameInput.value,
      serverContent: this.content.nativeElement.value
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      blueprintName: this.serverName.nativeElement.value,
      blueprintContent: this.content.nativeElement.value
    });
  }

}
