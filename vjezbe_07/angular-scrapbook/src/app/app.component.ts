import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from "./message/message.component";
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-scrapbook';

messages: {text: string, id: number}[] = [
  { text: "Embrace kindness", id: 0},
  { text: "Celebrate diversity", id: 1},
  { text: "Cherish our planet", id: 2}
];

  handle(event: any) {
    console.log(event);
  }

  passedByReference: number = 5;

  isAdmin: boolean = true;

}

