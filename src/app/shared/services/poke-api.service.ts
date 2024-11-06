import { Injectable } from '@angular/core';
import { AllPokemonResponse, Pokemon, PokemonUrl } from '../interfaces/pokeApi';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http : HttpClient) { } //remeber to add HttpClientProvider to app.config

  baseUrl : string = "https://pokeapi.co/api/v2/pokemon"

  getPokemons() : Pokemon[] {
    let offset : number = 0;
    let limit : number = 20;
    let url : string = this.baseUrl + "?offset="+ offset + "&limit=" + limit;

    let pokemons : Pokemon[] = []
    this.http.request<AllPokemonResponse>('GET', url, {responseType:'json'}).pipe(delay(500)) //remove delay, this is for latency test
    .subscribe(data => data.results
      .map(result => {let poke : Pokemon = {
        name: result.name
      }
      pokemons.push(poke)
    }));

    return pokemons;
  }
}
