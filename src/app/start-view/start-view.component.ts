import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-start-view',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './start-view.component.html',
  styleUrl: './start-view.component.css'
})

export class StartViewComponent {
  boardSize = 3;
  gameService = inject(GameService);

  startGame(){
    this.gameService.initGame(this.boardSize);
  }
}
