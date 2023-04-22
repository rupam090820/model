import { Component } from '@angular/core';
import { user } from './model/user'; //import user model
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userinfo:any= new user('rupam', 22 , "birati"); // here create constructor of model and store allthing in userinfo data-member and put value of model object..
 


}