import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

    @Input('au-mask')
    mask = '';

    input: HTMLInputElement;

    constructor(el: ElementRef) {

        this.input = el.nativeElement;

    }

    ngOnInit() {

        this.input.value = this.buildPlaceHolder();

    }

    buildPlaceHolder(): string {

        const value = '';

        return value;

    }

}
