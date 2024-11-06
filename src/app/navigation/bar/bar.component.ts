import { Component, inject } from '@angular/core';
import { SelectionComponent } from "../selection/selection.component";
import { PokeApiService } from '../../shared/services/poke-api.service';
import { PokemonUrl } from '../../shared/interfaces/pokeApi';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [SelectionComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  pokeApiService = inject(PokeApiService);
  pokemons : PokemonUrl[];

  constructor() {
    this.pokemons = this.pokeApiService.getPokemons();
  }
}
