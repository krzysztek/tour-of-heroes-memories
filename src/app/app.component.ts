import {Component, OnDestroy} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './message.service';

@Component({
  'selector': 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  providers: [
    MessageService
  ],
})

export class AppComponent implements OnDestroy {

  title = 'Tour of Heroes';
  message: any = 'Default Alert!';
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
