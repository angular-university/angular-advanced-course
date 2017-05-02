import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FontAwesomeInputComponent} from "./au-fa-input/au-fa-input.component";
import {InputBoxConfigService} from "./config/input-box-config.service";
import {InputBoxConfigDirective} from "./config/input-box-config.directive";



@NgModule({
  declarations: [FontAwesomeInputComponent, InputBoxConfigDirective],
  imports: [CommonModule],
  exports: [FontAwesomeInputComponent, InputBoxConfigDirective]
})
export class AuInputBoxModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuInputBoxModule,
      providers: [InputBoxConfigService]
    };
  }

}
