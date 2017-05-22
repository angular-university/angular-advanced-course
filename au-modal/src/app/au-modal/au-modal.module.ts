



import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuModalOpenDirective} from "./au-modal-open.directive";
import {AuModalComponent} from "./au-modal.component";
import {AuModalService} from "./au-modal.service";


@NgModule({
  declarations: [AuModalComponent, AuModalOpenDirective],
  imports: [
    CommonModule
  ],
  exports: [AuModalComponent, AuModalOpenDirective]
})
export class AuModalModule {


  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuModalModule,
      providers: [AuModalService]
    }
  }


}



