import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuModalService {

  private subject = new Subject();

  close$: Observable<any> = this.subject.asObservable();


  close() {
     this.subject.next();
  }

}
