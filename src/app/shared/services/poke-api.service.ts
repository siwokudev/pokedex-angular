import { Injectable } from '@angular/core';
import { AllPokemonResponse, Pokemon, PokemonSpecies, PokemonUrl } from '../interfaces/pokeApi';
import { HttpClient } from '@angular/common/http'; 
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http : HttpClient) { } //remeber to add HttpClientProvider to app.config

  baseUrl : string = "https://pokeapi.co/api/v2"
  next : string = ""

  getPokemons() : PokemonUrl[] {
    console.log("fetching all pokemon")

    let offset : number = 250;
    let limit : number = 151;
    let url : string = this.baseUrl + "/pokemon?offset="+ offset + "&limit=" + limit;

    let pokemons : PokemonUrl[] = []
    this.http.request<AllPokemonResponse>('GET', url, {responseType:'json'}).pipe(delay(500)) //remove delay, this is for latency test
    .subscribe(data => data.results
      .map(result => {
        this.next = data.next;
        let splitId :number = parseInt(result.url.split(/\/(\d+)\//)[1]);
        let poke : PokemonUrl = {
        name: result.name,
        url: result.url,
        id: splitId,
      };
      pokemons.push(poke);
    }));

    return pokemons;
  }

  getPokemon( id : number) : Observable<Pokemon> {
    let url : string = this.baseUrl + "/pokemon/" + id;
    return this.http.request<Pokemon>('GET', url, {responseType:'json'});
  }

  getPokemonSpecies(id : number) : Observable<PokemonSpecies> {
    let url : string = this.baseUrl + "/pokemon-species/" + id;
    return this.http.request<PokemonSpecies>('GET', url, {responseType: "json"});
  }
}
