import { Component } from '@angular/core';
import { objEvent } from './models/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: objEvent[] = [{name:'Rave',img:'../assets/events/event1.jpg', desc:'Johan birthday'}, {name:'Birthday party',img:'../assets/events/event2.jpg', desc:''}, {name:'Party',img:'../assets/events/event3.jpg', desc:''}];
  title = 'Booker';
}