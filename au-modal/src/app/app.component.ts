import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  context: any = {login:false};

  setLoginMode(login: boolean) {
    this.context = {login};
  }

}
