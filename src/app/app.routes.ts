import { Routes } from '@angular/router';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

export const routes: Routes = [
    {
        path:'',
        component:TicTacToeComponent
    },
    {
        path:"**",
        redirectTo:"/"
    }
];
