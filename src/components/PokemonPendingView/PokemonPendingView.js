import PokemonDataView from 'components/PokemonDataView';
import pendingImage from './pending.png';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div>Loading...</div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
