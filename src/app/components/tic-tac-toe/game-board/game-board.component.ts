import { Component } from '@angular/core';
import { GameBoxComponent } from '../game-box/game-box.component';
import { GameService } from '../../../service/game.service';
import { IBoxList } from '../../../Model/game.interface';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [GameBoxComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent {
  boxList:IBoxList[] = [];
  isFirstPlayerTurn= true;
  isSecondPlayerTurn = false;

  constructor(private gameService:GameService){}

  ngOnInit():void{
    this.gameService.boxListSubject.subscribe((data)=>{
      this.boxList = data;
    });
  }
}
