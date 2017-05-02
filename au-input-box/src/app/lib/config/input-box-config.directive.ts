import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {InputBoxConfigService} from "./input-box-config.service";

@Directive({
  selector: 'au-input-box-config'
})
export class InputBoxConfigDirective implements OnChanges {

  @Input()
  iconSize:string;

  constructor(private configService: InputBoxConfigService) {

  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['iconSize']) {
      this.configService.iconSize = changes['iconSize'].currentValue;

    }


  }


}
