import { Routes } from '@angular/router';
import { GameComponent } from '../components/game/game.component';

export const routes: Routes = [
    { path: 'game', component: GameComponent },
    // Other routes...
    { path: '', redirectTo: '/game', pathMatch: 'full' } 
];
