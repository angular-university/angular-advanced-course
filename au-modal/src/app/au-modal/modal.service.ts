import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AuModalService {

    private subject = new Subject();

    close$: Observable<any> = this.subject.asObservable();

    constructor() {

    }

    close() {
        this.subject.next();
    }
}
