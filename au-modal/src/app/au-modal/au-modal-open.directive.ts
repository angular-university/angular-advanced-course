import {Directive, TemplateRef, ViewContainerRef, Input, OnInit} from '@angular/core';
import {AuModalService} from "./au-modal.service";


@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenDirective implements OnInit {

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

    elements.forEach(element => {
      element.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
    });
  }


}
