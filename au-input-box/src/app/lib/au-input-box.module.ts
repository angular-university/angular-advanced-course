import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FontAwesomeInputComponent} from "./au-fa-input/au-fa-input.component";
import {InputBoxConfigService} from "./config/input-box-config.service";
import {InputBoxConfigDirective} from "./config/input-box-config.directive";
import {InputRefDirective} from "./common/input-ref.directive";
import {AuMdInputComponent} from "./au-md-input/au-md-input.component";



@NgModule({
  declarations: [ InputBoxConfigDirective, FontAwesomeInputComponent, AuMdInputComponent, InputRefDirective],
  imports: [CommonModule],
  exports: [FontAwesomeInputComponent, AuMdInputComponent, InputRefDirective]
})
export class AuInputBoxModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuInputBoxModule,
      providers: [InputBoxConfigService]
    };
  }

}
