import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameService } from '../game.service';
import { XSvg } from '../svg/x.svg';
import { OSvg } from '../svg/o.svg';

@Component({
  selector: 'app-end-view',
  standalone: true,
  imports: [
    RouterLink,
    XSvg,
    OSvg
  ],
  templateUrl: 'end-view.component.html',
  styleUrl: './end-view.component.css'
})
export class EndViewComponent {
  gameService = inject(GameService);

  result = this.gameService.getGameResult();
}
