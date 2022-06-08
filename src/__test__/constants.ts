import { EvoTest, PokInfoTest } from '@utils/types';

export const group: EvoTest[] = [
  {
    chain: {
      species: {
        name: 'charmander',
      },
      evolves_to: [
        {
          species: {
            name: 'charmeleon',
          },
          evolves_to: [
            {
              species: {
                name: 'charizard',
              },
            },
          ],
        },
      ],
    },
  },
  {
    chain: {
      species: {
        name: 'bulbasaur',
      },
      evolves_to: [
        {
          species: {
            name: 'ivysaur',
          },
          evolves_to: [
            {
              species: {
                name: 'venusaur',
              },
            },
          ],
        },
      ],
    },
  },
];

export const fakePokData: PokInfoTest = {
  abilities: [
    {
      ability: {
        name: 'blaze',
        url: 'example.ability.com',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  id: 5,
  name: 'charmeleon',
  sprites: {
    other: {
      dream_world: {
        front_default: 'test.com',
        front_female: null,
      },
    },
  },
  species: {
    name: 'charmeleon',
    url: 'example.specoec.com',
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'example.type.com',
      },
    },
  ],
  stats: [
    {
      base_stat: 58,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  height: 11,
  weight: 190,
};

export const falsyPokData: PokInfoTest = {
  abilities: [
    {
      ability: {
        name: 'blaze',
        url: 'example.ability.com',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  id: 5,
  name: 'fakepok',
  sprites: {
    other: {
      dream_world: {
        front_default: 'test.com',
        front_female: null,
      },
    },
  },
  species: {
    name: 'charmeleon',
    url: 'example.specoec.com',
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'example.type.com',
      },
    },
  ],
  stats: [
    {
      base_stat: 58,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  height: 11,
  weight: 190,
};

export const groupResult: EvoTest = {
  chain: {
    species: {
      name: 'charmander',
    },
    evolves_to: [
      {
        species: {
          name: 'charmeleon',
        },
        evolves_to: [
          {
            species: {
              name: 'charizard',
            },
          },
        ],
      },
    ],
  },
};

export const fakeGroupResult: EvoTest = {
  chain: {
    species: {
      name: 'charmander',
    },
    evolves_to: [
      {
        species: {
          name: undefined,
        },
        evolves_to: [
          {
            species: {
              name: undefined,
            },
          },
        ],
      },
    ],
  },
};

export const allFakeUrls: string[] = [
  'https://pokeapi.co/api/v2/pokemon/charmander',
  'https://pokeapi.co/api/v2/pokemon/charmeleon',
  'https://pokeapi.co/api/v2/pokemon/charizard',
];

export const fakeUrls: string[] = [
  'https://pokeapi.co/api/v2/pokemon/charmander',
];
