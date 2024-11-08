import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, DoCheck, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeApiService } from '../../shared/services/poke-api.service';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Pokemon, PokemonSpecies } from '../../shared/interfaces/pokeApi';
import { FlavourTextLanguageFilterPipe } from '../../shared/pipes/flavour-text-language-filter.pipe';
import { StatsDetailComponent } from '../stats-detail/stats-detail.component';

@Component({
  selector: 'app-general-detail',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage, TitleCasePipe, FlavourTextLanguageFilterPipe, StatsDetailComponent],
  templateUrl: './general-detail.component.html',
  styleUrl: './general-detail.component.css'
})
export class GeneralDetailComponent implements DoCheck{
  router = inject(Router)
  route = inject(ActivatedRoute)
  pokeApiService = inject(PokeApiService);

  imgUrl : string = "";
  descriptionText : string =""

  shiny : boolean = false
  id : number = 0;
  pokemon : Pokemon = {} as Pokemon
  pokemonSpecies: PokemonSpecies = {} as PokemonSpecies

  ngDoCheck(): void { //Ask for a best way on how to load the details for each Id
    this.route.paramMap.forEach((params : ParamMap) => {
      const expecteId = params.get('id');

      if (Number.isNaN(Number(expecteId)) || 1 > Number(expecteId)) {
        this.router.navigate([""]);
      }

      if (this.id != Number(expecteId)) {
        this.id = Number(expecteId);
        this.pokemon = {} as Pokemon
        this.pokemonSpecies = {} as PokemonSpecies

        this.pokeApiService.getPokemon(this.id).pipe()
        .subscribe((pokemon : Pokemon) => {
          this.pokemon = pokemon
          this.onShinySelected(this.shiny)
        });

        this.pokeApiService.getPokemonSpecies(this.id)
        .subscribe((species : PokemonSpecies) => {
          this.pokemonSpecies = species;
          console.log(this.pokemonSpecies)
        });

      }
    })

  }

  onShinySelected(value : boolean) {
    this.shiny = value
    if (this.shiny) {
      this.imgUrl= this.pokemon.sprites.other['official-artwork'].front_shiny;
    } else {
      this.imgUrl = this.pokemon.sprites.other['official-artwork'].front_default;
    }
    
  }
}
