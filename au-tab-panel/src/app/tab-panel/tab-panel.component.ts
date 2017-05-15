import {Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, AfterContentInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'au-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input()
  headerTemplate: TemplateRef<any>;

  @Input()
  tabTemplate: TemplateRef<any>;


  constructor() {


  }

  ngAfterContentInit() {
    //this.tabs.forEach(tab => tab.tabTemplate =  this.tabTemplate);
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }

}
