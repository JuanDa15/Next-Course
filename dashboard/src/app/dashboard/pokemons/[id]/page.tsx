import { getPokemon } from '@src/services/poke-api';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: Promise<{ id: string }>;
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

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;

  const pokemon = await getPokemon(id);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getSpritesArray = (sprites: Record<string, any>) => {
    const spritesArr: string[] = [];
    for (const key in sprites) {
      if (typeof sprites[key] === 'string') {
        spritesArr.push(sprites[key]);
      }
      if (typeof sprites[key] === 'object') {
        if (sprites[key] && 'icons' in sprites[key]) {
          const nestedSprites = getSpritesArray(sprites[key].icons);
          spritesArr.push(...nestedSprites);
        } else {
          const nestedSprites = getSpritesArray(sprites[key]);
          spritesArr.push(...nestedSprites);
        }
      }
    }
    return spritesArr;
  };
  return (
    <div className='w-full h-full'>
      <h1 className='text-3xl font-bold'>{pokemon.name}</h1>
      <hr className='my-4' />
      <div className='flex flex-row gap-2'>
        <div className='flex flex-col bg-gray-700 rounded-md p-4 shadow-gray-900 shadow-sm w-1/2'>
          <h2 className='text-2xl font-semibold font-mono'>Abilities</h2>
          <section className='flex flex-row gap-2 mt-4'>
            {pokemon.abilities.map((ability) => (
              <article
                className='px-3 py-1 rounded-full bg-green-700'
                key={ability.ability.name}
              >
                <small>{ability.ability.name}</small>
              </article>
            ))}
          </section>
        </div>
        <div className='flex flex-col bg-gray-700 rounded-md p-4 shadow-gray-900 shadow-sm w-1/2'>
          <h2 className='text-2xl font-semibold font-mono'>Forms</h2>
          <section className='flex flex-row gap-2 mt-4'>
            {pokemon.forms.map((form) => (
              <article
                className='px-3 py-1 rounded-full bg-green-700'
                key={form.name}
              >
                <small>{form.name}</small>
              </article>
            ))}
          </section>
        </div>
      </div>

      <div className='flex flex-col bg-gray-700 rounded-md p-4 shadow-gray-900 shadow-sm mt-4'>
        <h2 className='text-2xl font-semibold font-mono'>Moves</h2>
        <section className='flex flex-row gap-2 mt-4 flex-wrap'>
          {pokemon.moves.map((move) => (
            <article
              className='px-3 py-1 rounded-full bg-sky-700'
              key={move.move.name}
            >
              <small>{move.move.name}</small>
            </article>
          ))}
        </section>
      </div>

      <div className='flex flex-col bg-gray-700 rounded-md p-4 shadow-gray-900 shadow-sm mt-4'>
        <h2 className='text-2xl font-semibold font-mono'>Sprites</h2>
        <section className='flex flex-row gap-2 mt-4 flex-wrap'>
          {getSpritesArray(pokemon.sprites).map((sprite) => (
            <Image
              key={sprite}
              src={sprite}
              unoptimized={sprite.includes('.gif') ? true : false}
              width={64}
              height={64}
              alt={sprite}
              priority={false}
              loading='lazy'
            />
          ))}
        </section>
      </div>
    </div>
  );
}
