import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective {

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {

    }


    @Input()
    set auModalOpenOnClick(els) {

        let elements: HTMLBaseElement[];

        if (els.length) {
            elements = els;
        }
        else {
            elements = [els];
        }

        elements.forEach(el => {

            el.addEventListener('click', () => {

                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);

            } );

        })

    }

}
