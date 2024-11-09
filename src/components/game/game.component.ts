import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {

  choices : string[] = ['Stone','Paper','Scissors'];
  userChoice : string = '';
  computerChoice :string = '';
  result='';
  ngOnInit(): void {
    initFlowbite();
 
  }
  play(userSelection : string): void {
    this.userChoice =  userSelection;
    this.computerChoice =  this.choices[Math.floor(Math.random()* this.choices.length)];
    this.result =this.determineWinner();
  }
  determineWinner(): string {
    if(this.userChoice ==  this.computerChoice)
    {
      return "It's a tie";
    }
    if(
      (this.userChoice === 'Stone' && this.computerChoice ==='Scissors')||
      (this.userChoice === 'Paper' && this.computerChoice ==='Stone')||
      (this.userChoice === 'Scissors' && this.computerChoice ==='Paper')
    ){

      return 'You win!!!';
    }
    return 'Computer wins!'
  }


}
