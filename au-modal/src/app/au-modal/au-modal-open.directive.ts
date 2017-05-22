import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';



@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenDirective {

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

    elements.forEach(element => {
      element.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
    });
  }


}
