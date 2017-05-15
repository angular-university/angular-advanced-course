import {Component, ContentChildren, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'au-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input()
  headerTemplate: TemplateRef<any>;



  constructor() {


  }

  ngOnInit() {

  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }

}
