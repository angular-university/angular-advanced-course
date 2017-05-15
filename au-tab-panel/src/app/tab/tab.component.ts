import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'au-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  title:string;

  constructor() {


  }


  ngOnInit() {

  }


}
