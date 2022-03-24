// export type Result = {
//   name: string;
//   url: string;
// };

export type Data = {
  count: number;
  next: string;
  previous: null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type Response = {
  abilities: [Ability];
  forms: [
    {
      name: string;
      url: string;
    }
  ];

  height: number;
  id: number;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
    }
  ];
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
        front_female: null;
      };
    };
  };
  stats: [Stat];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];

  weight: number;
};
