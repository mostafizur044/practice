import { Component, OnInit } from '@angular/core';
import { ScoreBoardService } from '../score-board.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  run: number = 0;
  ball: number = 0;
  wkt: number = 0;
  over: number = 0;
  scores = [];
  gameOver: boolean;

  constructor(
    private service: ScoreBoardService
  ) { }

  ngOnInit() {
    this.scores = this.service.scors;
    this.shuffleArray();
  }

  private shuffleArray() {
    for (let i = this.scores.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.scores[i];
      this.scores[i] = this.scores[j];
      this.scores[j] = temp;
    }
  }

  bowle (i) {
    const data = this.scores.find( f => f.id === i);
    this.wkt += data.out; 
    this.run += data.run;
    this.ball += data.ball;
    if(this.wkt === 2 ) {
      this.gameOver = true;
      setTimeout(() => {
        this.run = 0;
        this.ball = 0;
        this.wkt = 0;
        this.over = 0;
        this.gameOver = false
      }, 2000);
    } else {
      if(this.ball===6) {
        this.over++;
        this.ball = 0;
      }
    }
    this.shuffleArray();
  }

}
