import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor() { }

  getPokemons() : Pokemon[] {
    let result : Pokemon[] = [
      {
        name: "pikachu",
      },
      {
        name: "charmander",
      },
      {
        name: "meow",
      },
    ]
    return result;
  }
}
