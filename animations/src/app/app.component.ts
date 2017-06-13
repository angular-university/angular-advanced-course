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


    onAnimationStart() {
        console.log("On Animation Start");
    }

    onAnimationEnd() {
        console.log("On Animation End");
    }

}
