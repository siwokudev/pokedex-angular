export interface Pokemon {
    id: number,
    name: string,
    sprites: Sprites,
    cries: {
        latest:string,
    },
    species:{
        name: string,
        url: string,
    }
}

export interface PokemonSpecies {
    id: number,
    flavor_text_entries: FlavorText[],
    genera: [
        {
            genus: string,
            language: SimpleField
        }
    ],
    habitat: SimpleField,
    evolution_chain:{
        url: string,
    }, has_gender_differences : boolean
}

export interface FlavorText {
    flavor_text: string,
    language: SimpleField,
    version: SimpleField
}

export interface SimpleField {
    name:string,
    url: string
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
    other: {
        dream_world: Sprites,
        home: Sprites,
        "official-artwork": Sprites,
        showdown: Sprites
    }
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
  