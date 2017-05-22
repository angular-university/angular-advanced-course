import {Component, OnInit, TemplateRef, Input, EventEmitter, Output} from '@angular/core';
import {AuModalService} from "./au-modal.service";

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;

  @Input()
  context: any;

  @Output()
  close = new EventEmitter<any>();

  constructor(private modalService: AuModalService) {

  }

  ngOnInit() {

  }

  cancelClick($event: KeyboardEvent) {
    $event.stopPropagation();
  }

  closeModal() {
    console.log('closing ');
    this.close.emit();
    this.modalService.close();
  }

}
