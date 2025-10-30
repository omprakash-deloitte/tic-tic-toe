import { Component } from '@angular/core';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [GameBoardComponent],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent {
  result = "";
  currentMark = "";
  constructor(private gameService:GameService){}

  ngOnInit():void{
    this.gameService.result.subscribe((data)=>{
      this.result = data;
    });
    this.gameService.currentMarkingText.subscribe((data)=>{
      this.currentMark = data;
    })
  }

  resetGame(){
    this.gameService.resetGame();
  }
}
