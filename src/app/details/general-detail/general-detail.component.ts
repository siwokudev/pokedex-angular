import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, DoCheck, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeApiService } from '../../shared/services/poke-api.service';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Pokemon } from '../../shared/interfaces/pokeApi';

@Component({
  selector: 'app-general-detail',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage, TitleCasePipe],
  templateUrl: './general-detail.component.html',
  styleUrl: './general-detail.component.css'
})
export class GeneralDetailComponent implements DoCheck{
  router = inject(Router)

  ngDoCheck(): void { //Ask for a best way on how to load the details for each Id
    this.route.paramMap.forEach((params : ParamMap) => {
      const expecteId = params.get('id');

      if (Number.isNaN(Number(expecteId)) || 1 > Number(expecteId)) {
        this.router.navigate([""]);
      }

      if (this.id != Number(expecteId)) {
        this.id = Number(expecteId);
        this.pokemon = {} as Pokemon
        this.pokeApiService.getPokemon(this.id)
        .subscribe((pokemon : Pokemon) => {
          this.pokemon = pokemon
          this.onShinySelected(this.shiny)
        });
      }
    })

  }

  route = inject(ActivatedRoute)
  pokeApiService = inject(PokeApiService);

  imgUrl : string = "";
  descriptionText : string =""

  shiny : boolean = false
  id : number = 0;
  pokemon : Pokemon = {} as Pokemon
  play : boolean = false


  onShinySelected(value : boolean) {
    this.shiny = value
    if (this.shiny) {
      this.imgUrl= this.pokemon.sprites.other['official-artwork'].front_shiny;
    } else {
      this.imgUrl = this.pokemon.sprites.other['official-artwork'].front_default;
    }
    
  }
}
