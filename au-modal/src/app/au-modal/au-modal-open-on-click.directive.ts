import {
    AfterContentInit,
    ContentChild,
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef,
    OnDestroy
} from '@angular/core';
import {AuModalComponent} from "./au-modal.component";
import {AuModalService} from "./modal.service";

@Directive({
    selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit {


    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private modalService: AuModalService) {

    }

    ngOnInit() {

        this.modalService.close$.subscribe(() => this.viewContainer.clear());

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

        elements.forEach(el => el.addEventListener('click', () => {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this.templateRef);
        }));
    }


}

