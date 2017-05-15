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

  ngAfterContentInit() {
    this.tabs.first.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }

  selectTab(tab: TabComponent) {

    this.tabs.forEach(tab => tab.selected = false);

    tab.selected = true;

  }


}
