import { PokemonPageContent } from '@src/components/PokemonPageContent';
import { getPokemon } from '@src/services/poke-api';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params = Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const pokemon = await getPokemon(id);
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

export default async function PokemonIdPage({ params }: Props) {
  const { id } = await params;

  const pokemon = await getPokemon(id);
  return <PokemonPageContent pokemon={pokemon} />;
}
