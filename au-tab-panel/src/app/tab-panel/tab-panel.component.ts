import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'au-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;


  constructor() { }

  ngOnInit() {

  }

}
