import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeApiService } from '../../shared/services/poke-api.service';

@Component({
  selector: 'app-general-detail',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage],
  templateUrl: './general-detail.component.html',
  styleUrl: './general-detail.component.css'
})
export class GeneralDetailComponent {
  pokeApiService = inject(PokeApiService);

  imgUrl : string = "/assets/poke-ball.png";
  shiny : boolean = false

  onShinySelected(value : boolean) {
    this.shiny = value
    if (this.shiny) {
      this.imgUrl= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png";
    } else {
      this.imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    }
    
  }
}
