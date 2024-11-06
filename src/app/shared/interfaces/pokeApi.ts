export interface Pokemon {
    name: string
}

export interface PokemonUrl {
    name: string
    url: string
}

export interface AllPokemonResponse {
    count: number;
    next: string,
    previous: string,
    results: Array<PokemonUrl>;
  }
  