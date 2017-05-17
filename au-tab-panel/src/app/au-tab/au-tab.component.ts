import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'au-tab',
    templateUrl: './au-tab.component.html',
    styleUrls: ['./au-tab.component.scss']
})
export class AuTabComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    selected = false;

    constructor() {
    }

    ngOnInit() {


    }



}
