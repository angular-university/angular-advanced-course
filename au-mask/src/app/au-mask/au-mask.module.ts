
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuMaskDirective } from './au-mask.directive';

@NgModule({
    declarations: [AuMaskDirective],
    imports: [
        CommonModule
    ],
    exports: [AuMaskDirective]
})
export class AuMaskModule {

}