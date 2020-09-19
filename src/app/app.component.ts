import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type = "text" [(ngModel)] = "user" />


{{user | Reverse}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = "abc" ;
  title = 'ReverseString';
}
