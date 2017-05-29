import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {AuModalService} from "./modal.service";
import {EventManager} from '@angular/platform-browser';

@Component({
    selector: 'au-modal',
    templateUrl: './au-modal.component.html',
    styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

    @Input()
    body: TemplateRef<any>;

    @Input()
    hideOnClickOutside = true;

    @Input()
    hideOnEscape = true;


    constructor(private modalService: AuModalService, private eventManager: EventManager) {
        this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
            if (this.hideOnEscape) {
                this.closeModal();
            }
        });
    }

    ngOnInit() {
    }

    onClickOutsideModal() {
        if (this.hideOnClickOutside) {
            this.closeModal();
        }
    }

    closeModal() {
        this.modalService.close();
    }


    cancelClick(evt: KeyboardEvent) {
        evt.preventDefault();
        evt.stopPropagation();
    }

}
