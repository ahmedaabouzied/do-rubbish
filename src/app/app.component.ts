import { Component } from '@angular/core';
import {PwaService} from '';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dorubbish';
  constructor(public Pwa: PwaService) { }
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
}
