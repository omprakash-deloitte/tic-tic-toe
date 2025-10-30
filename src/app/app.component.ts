import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tic-tack-toe';
}
