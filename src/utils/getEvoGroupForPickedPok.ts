import { Evolution, EvoTest, PokInfo, PokInfoTest } from './types';

export const getEvoGroupForPickedPok = (
  group: EvoTest[] | Evolution[],
  pok: PokInfo | undefined | PokInfoTest
) => {
  return group.find((item: Evolution | EvoTest) => {
    if (
      item.chain.species.name !== pok?.name &&
      item.chain.evolves_to[0].species.name !== pok?.name &&
      item.chain.evolves_to[0].evolves_to[0]?.species.name !== pok?.name
    ) {
      return false;
    }

    return item;
  });
};
