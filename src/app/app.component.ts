import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fRegistration Form';
  model:any=[];

  onSubmit() {
    console.log(this.model);
  }
}
