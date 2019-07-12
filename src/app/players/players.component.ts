import { Component, OnInit, Input } from '@angular/core';
import {PlayerClass} from '../player';
//import {PLAYERS} from '../player-stock'; 
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  
  @Input('firstScreen') firstScreen : any = true;
  //private players : PlayerClass[] = PLAYERS;
  constructor(private playerservice:PlayerService) {
	  
  }

  ngOnInit() {	  
     this.playerservice.getPlayers();
  }

}
