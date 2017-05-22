

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuTabPanelComponent} from "./au-tab-panel.component";
import {AuTabComponent} from "../au-tab/au-tab.component";

@NgModule({
    declarations: [AuTabPanelComponent, AuTabComponent],
    imports: [
        CommonModule
    ],
    exports: [AuTabPanelComponent, AuTabComponent]
})
export class AuTabPanelModule {


}