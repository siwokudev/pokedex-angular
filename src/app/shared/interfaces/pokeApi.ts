export interface Pokemon {
    name: string
    sprites: Sprites
}

export interface Sprites {
    back_default: string,
    back_female : string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    fron_shiny_female: string
}

export interface PokemonUrl {
    name: string
    url: string
    id: number
}

export interface AllPokemonResponse {
    count: number;
    next: string,
    previous: string,
    results: Array<PokemonUrl>;
  }
  