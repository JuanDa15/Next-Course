import { PokemonPageContent } from '@src/components/PokemonPageContent';
import { getPokemonByName, getPokemons } from '@src/services/poke-api';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const pokemons = await getPokemons(15, 0);
  return (pokemons?.results ?? []).map((pokemon) => ({ name: pokemon.name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  try {
    const pokemon = await getPokemonByName(name);
    return {
      title: pokemon.name,
      description: `Informative page about ${pokemon.name}`,
    };
  } catch {
    return {
      title: 'Pokemon detail',
      description: 'Page to show pokemon details',
    };
  }
}

export default async function PokemonNamePage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemonByName(name);
  return <PokemonPageContent pokemon={pokemon} />;
}
