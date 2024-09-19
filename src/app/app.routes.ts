import { Routes } from '@angular/router';
import { StartViewComponent } from './start-view/start-view.component';
import { GameViewComponent } from './game-view/game-view.component';
import { EndViewComponent } from './end-view/end-view.component';
import { GameOverService } from "./game-over.service";

export const routes: Routes = [
  {
    path: '',
    component: StartViewComponent
  }, {
    path: 'game',
    component: GameViewComponent
  }, {
    path: 'end',
    component: EndViewComponent,
    canActivate: [GameOverService]
  }
];
