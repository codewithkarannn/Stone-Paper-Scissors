import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from '../components/game/game.component';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'stone-paper-scissors';

  
  ngOnInit(): void {
    initFlowbite();
  }
}
