import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'au-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {

  @Input()
  title:string;

  constructor() {


  }


  ngOnInit() {

  }


}
