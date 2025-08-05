interface Ability2 {
  name: string;
  url: string;
}

interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

interface Move2 {
  name: string;
  url: string;
}

interface Move {
  move: Move2;
}

interface Animated {
  front_default: string;
}

interface BlackWhite {
  animated: Animated;
  front_default: string;
}

interface GenerationV {
  "black-white": BlackWhite;
}

interface Versions {
  "generation-v": GenerationV;
}

interface Sprites {
  front_default: string;
  versions: Versions;
}

interface Stat2 {
  name: string;
  url: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

interface Type2 {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: Type2;
}

export interface RawPokemon {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  moves: Move[];
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Result {
  name: string;
  url: string;
}

export interface RawPokemonList {
  count: number;
  next: string;
  previous: unknown;
  results: Result[];
}
