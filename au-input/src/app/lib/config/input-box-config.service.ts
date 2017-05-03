import { Injectable } from '@angular/core';
import {InputBoxConfig} from "./input-box-config";
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const DEFAULT_CONFIG: InputBoxConfig = {
  iconSize: '20px'
}

@Injectable()
export class InputBoxConfigService {

  private subject = new BehaviorSubject(DEFAULT_CONFIG);

  config$: Observable<InputBoxConfig> = this.subject.asObservable();

  set iconSize(iconSize:string) {

      const config = Object.assign(this.subject.getValue());

      config.iconSize = iconSize;

      this.subject.next(config);
  }

}
