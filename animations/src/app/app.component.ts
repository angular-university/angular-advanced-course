import {Component} from '@angular/core';
import {fadeInOut} from "./animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeInOut]
})
export class AppComponent {

    onAnimationStart() {
        console.log("On Animation Start");
    }

    onAnimationEnd() {
        console.log("On Animation End");
    }

}
