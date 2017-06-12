import {Component} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('tabActive', [
            state('open', style({
                opacity: 1
            })),
            state('closed', style({
                opacity: 0
            })),
            transition('open => closed', animate('1000ms ease-in')),
            transition('closed => open', animate('1000ms ease-out'))
        ]),
        trigger('fadeInOut', [
            transition('void => *', [   // :enter is alias to 'void => *'
                style({opacity:0}),
                animate(500, style({opacity:1}))
            ]),
            transition('* => void', [   // :leave is alias to '* => void'
                animate(500, style({opacity:0}))
            ])
        ])
    ]
})
export class AppComponent {


}
