import { Component, inject } from '@angular/core';
import { NgStyle } from "@angular/common";
import { GameCellComponent } from '../game-cell/game-cell.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-view',
  standalone: true,
  imports: [
    GameCellComponent,
    NgStyle
  ],
  templateUrl: 'game-view.component.html',
  styleUrl: './game-view.component.css'
})

export class GameViewComponent {
  gameService = inject(GameService);
  gameSize = this.gameService.getBoardSize();
  gameCells : number[] = Array(Math.pow(this.gameSize,2)).fill(2);
}
