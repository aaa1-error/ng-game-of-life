import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LifeService {
  public readonly HEIGHT = 48;
  public readonly WIDTH = 48;
  public readonly ALIVE = true;
  public readonly DEAD = false; 

  public Alive : boolean = false;
  public Life: boolean[][] = [];
  private Interval :  any | undefined;
  public UpdateInterval : number = 200;

  constructor() {
    this.Life = [];

    this.initializeField();
  }

  initializeField() {
    this.Life = [];

    for(var i = 0; i < this.HEIGHT; i++) {
      this.Life[i] = []

      for(var j = 0; j < this.WIDTH; j++) {
        this.Life[i][j] = false;
      }
    }
  }

  start() {
    this.Alive = true;
    this.Interval = setInterval(() => this.update(), this.UpdateInterval)
  }

  stop() {
    clearInterval(this.Interval);
    this.Interval = undefined;
    this.Alive = false;
  }

  toggleAlive(x : number, y : number) : boolean {
    this.Life[y][x] = !this.Life[y][x];

    return true;
  }

  update() {
    //console.log(this.Life)

    let nextGeneration : boolean[][] = [];

    for(var y = 0; y < this.HEIGHT; y++) {
      nextGeneration[y] = [];
      for(var x = 0; x < this.WIDTH; x++) {
        nextGeneration[y][x] = this.decideState(y, x);
      }
    }

    this.Life = nextGeneration;
  }

  private decideState(y : number, x : number) {
    let yStart = y - 1 < 0 ? 0 : y - 1,
        yEnd = y + 1 >= this.HEIGHT ? y : y + 1;

    let xStart = x - 1 < 0 ? 0 : x -1,
        xEnd = x + 1 >= this.WIDTH ? x : x + 1;

    let aliveNeighbours = 0, deadNeihgbours = 0;

    //console.log(yStart, y, yEnd)

    for(let yi = yStart; yi <= yEnd; yi++) {
      for(let xi = xStart; xi <= xEnd; xi++) {
        if(yi == y && xi == x) continue;

        if(this.Life[yi][xi]) aliveNeighbours++;
        //else deadNeihgbours++;
        if(aliveNeighbours == 4) break;
      } 
    }

    if(this.Life[y][x] == this.ALIVE) {
      //if(aliveNeighbours < 2) return this.DEAD;
      //if(aliveNeighbours == 3 || aliveNeighbours == 2) return this.ALIVE;
      if(aliveNeighbours >= 2 && aliveNeighbours <= 3) return this.ALIVE
      else return this.DEAD
    } else {
      if(aliveNeighbours == 3) return this.ALIVE;
    }

    return this.Life[y][x];
  }

  public slowDown() {
    if(this.UpdateInterval >= 1000) return;
    this.UpdateInterval += 50;

    if(this.Alive) {
      this.stop(); 
      this.start();
    }
  }

  public speedUp() {
    console.log(this.UpdateInterval)

    if(this.UpdateInterval <= 100) return;

    this.UpdateInterval -= 50;

    if(this.Alive) {
      this.stop(); 
      this.start();
    }
  }

  reset() {
    this.initializeField()
  }
}
