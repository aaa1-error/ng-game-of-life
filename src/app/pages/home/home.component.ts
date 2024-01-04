import { Component } from '@angular/core';
import { LifeService } from 'src/app/services/life.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public Life : LifeService) {
    
  }

  ngOnInit() {
    this.Life.start();
  }

  toggle() {
    if(this.Life.Alive) {
      this.Life.stop();
    } else {
      this.Life.start();
    }
  }
}
