import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})

export class GameOverService implements CanActivate{

  constructor(private gameService: GameService){}

  canActivate(): boolean{
    return this.gameService.isGameOver();
  }
}
