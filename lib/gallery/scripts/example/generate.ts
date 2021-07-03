import fetch from "node-fetch";
import * as fs from "fs/promises";
import * as path from "path";
import { RawPokemon, RawPokemonList } from "./raw";
import { normalizePokemon } from "./normalize";
import { Pokemon } from "./interface";

type PokemonType = Pokemon["types"][0];

const getTypes = (pokemons: Pokemon[]): PokemonType[] => {
	const set = pokemons.reduce((set, pokemon) => {
		pokemon.types.forEach((type) => {
			if (set.has(type)) return;
			set.add(type);
		});
		return set;
	}, new Set<PokemonType>());
	return [...set];
};

const printProgress = (progress: string) => {
	process.stdout.clearLine(0);
	process.stdout.cursorTo(0);
	process.stdout.write(progress + "%");
};

const main = async () => {
	// Skip if already populated (remove this to manually force a re-fetch)
	const distPath = path.resolve(__dirname, "../../src/examples");
	try {
		await fs.access(distPath);
		console.log("Examples found");
		return;
	} catch (e) {
		console.log("Examples not found, generating...");
	}

	// Fetch list of pokemons
	const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
	const raw = (await resp.json()) as RawPokemonList;

	// Fetch each pokemon
	const count = { value: 0 };
	const promises = raw.results.map(async (result) => {
		const resp = await fetch(result.url);
		const raw = (await resp.json()) as RawPokemon;
		count.value++;
		printProgress(count.value.toString());
		const pokemon = normalizePokemon(raw);
		return pokemon;
	});
	const pokemons = await Promise.all(promises);
	const types = getTypes(pokemons);

	// Write the result
	fs.mkdir(distPath);
	fs.writeFile(
		path.resolve(distPath, "pokemons.json"),
		JSON.stringify(pokemons, null, 2)
	);
	fs.writeFile(
		path.resolve(distPath, "types.json"),
		JSON.stringify(types, null, 2)
	);
	return pokemons;
};

main();
