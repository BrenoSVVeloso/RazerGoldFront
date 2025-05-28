import { Component, OnInit } from '@angular/core';
import {VitorPadrinhoService} from '../../services/vitor-padrinho.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valorant',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './vitor-padrinho.component.html',
  styleUrl: './vitor-padrinho.component.css'
})
export class VitorPadrinhoComponent implements OnInit{

  games: any[] = [];

  constructor(private vitorPadrinhoService: VitorPadrinhoService){}

  ngOnInit(): void {
      this.vitorPadrinhoService.getGames().subscribe(data => {
        this.games = data;
      });
  }

}
