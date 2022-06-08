import { Evolution, EvoTest } from './types';

export const getUrlsForPoks = (group: Evolution | EvoTest | undefined) => {
  const urls: string[] = [];
  if (group?.chain.species.name !== undefined) {
    urls.push(
      `https://pokeapi.co/api/v2/pokemon/${group?.chain.species?.name}`
    );
  }
  if (group?.chain.evolves_to[0]?.species.name !== undefined) {
    urls.push(
      `https://pokeapi.co/api/v2/pokemon/${group?.chain.evolves_to[0]?.species.name}`
    );
  }
  if (group?.chain.evolves_to[0].evolves_to[0]?.species.name !== undefined) {
    urls.push(
      `https://pokeapi.co/api/v2/pokemon/${group?.chain.evolves_to[0].evolves_to[0]?.species.name}`
    );
  }
  return urls;
};
