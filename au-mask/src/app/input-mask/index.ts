import {ModuleWithProviders, NgModule} from "@angular/core";
import {InputMaskDirective} from "./input-mask.directive";



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



export {InputMaskDirective} from './input-mask.directive';
