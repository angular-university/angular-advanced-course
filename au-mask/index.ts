import {ModuleWithProviders, NgModule} from "@angular/core";
import {InputMaskDirective} from "./src/app/input-mask/input-mask.directive";




@NgModule({
  declarations: [InputMaskDirective],
  exports: [InputMaskDirective]
})
export class InputMaskDirectiveModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: InputMaskDirectiveModule,
      providers: []
    };
  }

}



