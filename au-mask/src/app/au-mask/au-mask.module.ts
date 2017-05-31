
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputMaskDirective} from "./input-mask.directive";

@NgModule({
    declarations: [InputMaskDirective],
    imports: [
        CommonModule
    ],
    exports: [InputMaskDirective]
})
export class AuMaskModule {

}