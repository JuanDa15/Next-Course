import { PokeapiResponse } from "@src/interfaces/pokeapi";
import { Pokemon } from "@src/interfaces/pokemon";
import { notFound } from "next/navigation";

export const getPokemons = async (
  limit = 10,
  offset = 0
): Promise<PokeapiResponse> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (response.status === 404) {
    return notFound();
  }

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons');
  }

  const data = await response.json() as PokeapiResponse;
  data.results = data.results.map((pokemon) => ({
    ...pokemon,
    id: pokemon.url.split('/').at(-2),
  }))

  return data;
};

export const getPokemon = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
    next: {
      revalidate: 60 * 60 * 24 * 30
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status === 404) {
    return notFound();
  }

  if (!response.ok) {
    throw new Error('Failed to fetch pokemon with ID: ' + id);
  }

  const data = await response.json();
  return data;
}

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    method: 'GET',
    next: {
      revalidate: 60 * 60 * 24 * 30
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status === 404) {
    return notFound();
  }

  if (!response.ok) {
    throw new Error('Failed to fetch pokemon with ID: ' + name);
  }

  const data = await response.json();
  return data;
}
