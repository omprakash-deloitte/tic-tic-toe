import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBoxList } from '../Model/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  boxList = [
    {
      id:1,
      text:"",
    },
    {
      id:2,
      text:"",
    },
    {
      id:3,
      text:"",
    },
    {
      id:4,
      text:"",
    },
    {
      id:5,
      text:"",
    },
    {
      id:6,
      text:"",
    },
    {
      id:7,
      text:"",
    },
    {
      id:8,
      text:"",
    },
    {
      id:9,
      text:"",
    }
  ];

  boxListSubject =  new BehaviorSubject<IBoxList[]>(JSON.parse(JSON.stringify(this.boxList)));
  currentMarkingText = new BehaviorSubject<string>("X");
  result = new BehaviorSubject<string>("");

  updateSelectedBox(boxId:number){
    if(this.result.value !== ""){
      return;
    }
    const newBoxList = [...this.boxListSubject.value];
    const mark = this.currentMarkingText.value;
    newBoxList.forEach((item)=>{
      if(item.id == boxId){
        item.text = this.currentMarkingText.value;
        if(mark === 'X'){
          this.currentMarkingText.next("O");
        }else{
          this.currentMarkingText.next("X");
        }
      }
    });
    this.boxListSubject.next(newBoxList);
    this.checkGameStatus(newBoxList);
  }

  checkGameStatus(newBoxList:IBoxList[]){
    
    // check if X is continueous
    const isFirstRowX = newBoxList[0].text === "X" && newBoxList[1].text === "X" && newBoxList[2].text === "X";
    const isSecondRowX = newBoxList[3].text === "X" && newBoxList[4].text === "X" && newBoxList[5].text === "X";
    const isThirdRowX = newBoxList[6].text === "X" && newBoxList[7].text === "X" && newBoxList[8].text === "X";
    const isLeftDiagX = newBoxList[0].text === "X" && newBoxList[4].text === "X" && newBoxList[8].text === "X";
    const isRightDiagX = newBoxList[2].text === "X" && newBoxList[4].text === "X" && newBoxList[6].text === "X";
    const isFirstColX = newBoxList[0].text === "X" && newBoxList[3].text === "X" && newBoxList[6].text === "X";
    const isSecondColX = newBoxList[1].text === "X" && newBoxList[4].text === "X" && newBoxList[7].text === "X";
    const isThirdColX = newBoxList[2].text === "X" && newBoxList[5].text === "X" && newBoxList[8].text === "X";
   
    // check if O is continueous
    const isFirstRowO = newBoxList[0].text === "O" && newBoxList[1].text === "O" && newBoxList[2].text === "O";
    const isSecondRowO = newBoxList[3].text === "O" && newBoxList[4].text === "O" && newBoxList[5].text === "O";
    const isThirdRowO = newBoxList[6].text === "O" && newBoxList[7].text === "O" && newBoxList[8].text === "O";
    const isLeftDiagO = newBoxList[0].text === "O" && newBoxList[4].text === "O" && newBoxList[8].text === "O";
    const isRightDiagO = newBoxList[2].text === "O" && newBoxList[4].text === "O" && newBoxList[6].text === "O";
    const isFirstColO = newBoxList[0].text === "O" && newBoxList[3].text === "O" && newBoxList[6].text === "O";
    const isSecondColO = newBoxList[1].text === "O" && newBoxList[4].text === "O" && newBoxList[7].text === "O";
    const isThirdColO = newBoxList[2].text === "O" && newBoxList[5].text === "O" && newBoxList[8].text === "O";
  

    if(isFirstRowX || isSecondRowX || isThirdRowX || isLeftDiagX || isRightDiagX || isFirstColX || isSecondColX || isThirdColX){
      this.result.next("Player 1 is winner ( X )");
    }

    if(isFirstRowO || isSecondRowO || isThirdRowO || isLeftDiagO || isRightDiagO || isFirstColO || isSecondColO || isThirdColO){
      this.result.next("Player 2 is winner ( O )");
    }

    if(this.boxList.every((item)=> item.text !== "")){
      this.result.next("It's a draw !");
    }
  }

  resetGame(){
    this.boxListSubject.next(JSON.parse(JSON.stringify(this.boxList)));
    this.result.next("");
  }
}
