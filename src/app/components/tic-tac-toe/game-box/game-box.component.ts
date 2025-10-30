import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from '../../../service/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-box.component.html',
  styleUrl: './game-box.component.scss'
})
export class GameBoxComponent {
  @Input("boxItem") boxItem:any;
  @Output() selectEventEmitter = new EventEmitter<any>();

  constructor(private gameService:GameService){}
  
  handleSelectedBox(){
    if(this.boxItem.text !== ''){
      return;
    }
    this.gameService.updateSelectedBox(this.boxItem.id);
  }
}
