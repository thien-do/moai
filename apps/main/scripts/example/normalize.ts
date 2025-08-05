import { Pokemon } from "./interface";
import { RawPokemon } from "./raw";

const getBw = (raw: RawPokemon) =>
  raw.sprites.versions["generation-v"]["black-white"];

export const normalizePokemon = (raw: RawPokemon): Pokemon => ({
  height: raw.height,
  id: raw.id,
  image: {
    static: getBw(raw).front_default,
    animated: getBw(raw).animated.front_default,
  },
  moves: raw.moves.map((move) => move.move.name).join(", "),
  name: raw.name,
  stats: raw.stats.map((stat) => ({
    base: stat.base_stat,
    name: stat.stat.name,
  })),
  types: raw.types.map((type) => type.type.name),
  weight: raw.weight,
});
