import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../../services/valorant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valorant',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './valorant.component.html',
  styleUrl: './valorant.component.css'
})
export class ValorantComponent implements OnInit{

  games: any[] = [];

  constructor(private valorantService: ValorantService){}

  ngOnInit(): void {
      this.valorantService.getGames().subscribe(data => {
        this.games = data;
      });
  }

}
