import { Component, Input, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { GameService } from '../game.service';
import { XSvg } from '../svg/x.svg';
import { OSvg } from '../svg/o.svg';

@Component({
  selector: 'app-game-cell',
  standalone: true,
  imports: [
    XSvg,
    OSvg,
    RouterLink
  ],
  templateUrl:'game-cell.component.html',
  styleUrl: './game-cell.component.css'
})

export class GameCellComponent {
  @Input() index : string = '0';

  gameService = inject(GameService);
  marked = false;
  mark = 2;

  cellClick(){
    if (!this.marked) {
      this.marked = true
      this.mark = this.gameService.getPlayer()
      this.gameService.commitMove(Number(this.index));
    }
  }
}
