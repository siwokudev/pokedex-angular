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

  getPokemons() : PokemonUrl[] {
    let offset : number = 0;
    let limit : number = 20;
    let url : string = this.baseUrl + "?offset="+ offset + "&limit=" + limit;

    let pokemons : PokemonUrl[] = []
    this.http.request<AllPokemonResponse>('GET', url, {responseType:'json'}).pipe(delay(500)) //remove delay, this is for latency test
    .subscribe(data => data.results
      .map(result => {
        let splitId :number = parseInt(result.url.split(/\/(\d+)\//)[1]);
        let poke : PokemonUrl = {
        name: result.name,
        url: result.url,
        id: splitId,
      }
      pokemons.push(poke)
    }));

    return pokemons;
  }

  getPokemon( id : number) : Observable<Pokemon> {
    let url : string = this.baseUrl + "/" + id;
    return this.http.request<Pokemon>('GET', url, {responseType:'json'})
  }
}
