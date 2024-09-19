import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  turnCount = 0;
  boardSize = 3;
  boardState : number[][] = [[]];
  gameOver = false;
  gameResult = '';

  constructor() {}

  initGame(size: number){
    this.gameOver = false;
    this.gameResult = '';
    this.turnCount = 0;
    this.boardSize = size;
    this.boardState = Array(this.boardSize).fill([]);
    for (let i = 0; i < this.boardSize; i++) {
      this.boardState[i] = Array(this.boardSize).fill(2);
    }
  }

  getPlayer(): number{ //returns 0 for o, 1 for x
    return this.turnCount % 2;
  }

  getBoardSize(): number{
    return this.boardSize;
  }

  commitMove(id: number){
    const x = id % this.boardSize;
    const y = Math.floor(id / this.boardSize);
    const player = this.getPlayer();
    this.boardState[y][x] = player; //stores 1 or 0 in cell
    this.turnCount++;
    if(this.turnCount >= this.boardSize * 2 - 1) { //check for game end condition if played long enough
      this.resolveBoard(player, y, x);
    }
  }

  resolveBoard(player: number, y: number, x: number) {
    let winning = true;
    for(let i=0; i<this.boardSize; i++) {     //check if player has all of this column
      if (this.boardState[i][x] != player)
        winning = false;
    }
    if(!winning) {
      winning = true;
      for(let i=0; i<this.boardSize; i++) {
        if (this.boardState[y][i] != player)  //check if player has all of this row
          winning = false;
      }
    }
    if(!winning) {
      winning = true;
      for (let i = 0; i < this.boardSize; i++) {
        if (this.boardState[i][i] != player)  //check diagonal
          winning = false;
      }
    }
    if(!winning){
      winning = true;
      for(let i=0; i<this.boardSize; i++) {
        if (this.boardState[i][this.boardSize-1-i] != player) //check anti-diagonal
          winning = false;
      }
    }
    if (winning) {
      this.gameOver = true;
      const playerString = player == 0 ? 'O' : 'X';
      this.gameResult = playerString + ' wins!';
    } else if (this.turnCount == Math.pow(this.boardSize, 2)){  //check if all moves are made
      this.gameOver = true;
      this.gameResult = 'It\'s a draw!';
    }
  }

  isGameOver(): boolean{
    return this.gameOver;
  }
  getGameResult(): string{
    return this.gameResult;
  }
}
