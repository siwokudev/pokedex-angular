import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { AfterViewInit, Component, inject, Input} from '@angular/core';

import { PokeApiService } from '../../shared/services/poke-api.service';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [NgOptimizedImage, TitleCasePipe],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent implements AfterViewInit {
  pokeApiService = inject(PokeApiService)

  constructor() {}

  @Input() text = "Pokemon Name"
  @Input() id = 0
  @Input() imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"

  ngAfterViewInit(): void {
    if (this.id < 1){
      return;
    }

    this.pokeApiService.getPokemon(this.id).subscribe(data => {
      this.imgUrl = data.sprites.front_default
    });
  }
}
