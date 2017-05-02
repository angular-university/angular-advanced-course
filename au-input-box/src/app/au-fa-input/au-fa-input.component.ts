import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class FontAwesomeInputComponent implements OnInit {

  @Input()
  icon:string;

  constructor() {

  }

  ngOnInit() {

  }

  get classes() {

    const cssClasses = {
      'fa':true,
      'icon':true
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;

  }


}
