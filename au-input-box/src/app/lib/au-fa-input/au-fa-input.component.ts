import { Component, OnInit, Input } from '@angular/core';
import {InputBoxConfigService} from "../config/input-box-config.service";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class FontAwesomeInputComponent implements OnInit {

  @Input()
  icon:string;

  iconStyles$: Observable<object>;

  constructor(private configService: InputBoxConfigService) {

  }

  ngOnInit() {

    this.iconStyles$ = this.configService.config$.map(config => {

      const styles = {};

      if (config.iconSize) {
        styles['width'] = config.iconSize;
      }

      return styles;
    });

  }

  get classes() {

    const cssClasses = {
      'fa':true,
      'icon':true
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;

  }


}
