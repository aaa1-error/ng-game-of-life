import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent {
  @Input() Life : boolean[][] | undefined;

  handleCellClick(y : number, x : number) {
    this.Life![y][x] = !this.Life![y][x];
  }
}
