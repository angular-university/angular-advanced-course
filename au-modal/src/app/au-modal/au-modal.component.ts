import {Component, OnInit, TemplateRef, Input} from '@angular/core';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

  @Input()
  body:TemplateRef<any>;

  @Input()
  context:any;

  constructor() { }

  ngOnInit() {
  }

}
