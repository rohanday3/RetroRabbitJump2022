import { Component } from '@angular/core';
import { objEvent } from './models/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: objEvent[] = [{name:'Rave',img:'assets/events/event1.jpg', desc:'A new EDM festival that will leave you wanting... a shower.'}, {name:'Live Music',img:'assets/events/event2.jpg', desc:'A new indie band wants to burden you with their alternative style!'}, {name:'Ted Talk',img:'assets/events/event3.jpg', desc:'Why listen to it on YouTube when you can meet interested singles with similar issues?'}, {name:'Play',img:'assets/events/event4.jpg', desc:"If all the world's a stage then you're the main clown"}, {name:'Pool Party',img:'assets/events/event5.jpg', desc:"Come show off your gelatinous quarantine bod at this summer's most cursed pool party!"}, {name:'Disney on Ice',img:'assets/events/event6.jpg', desc:'Gender role indoctrination, now on ice!'}, {name:'Beer Garden',img:'assets/events/event7.jpg', desc:'You love beer. YOu love gardens. Why not drink beer in a garden?'},{name:'Uncharted Premier',img:'assets/events/event8.jpg', desc:'Another Tom Holland movie! '}, {name:'Comic Con',img:'assets/events/event9.jpg', desc:'Comic Con! You just know it smell crazy in there'},{name:'Jujitsu Keisen Screening',img:'assets/events/event10.jpg', desc:"A screening of Jujutsu Keisen because your girlfriend doesn't exist"},];
  title = 'Booker';
}