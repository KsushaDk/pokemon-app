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

export type PokInfo = {
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

export type Evolution = {
  baby_trigger_item: null;
  chain: {
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
    evolution_details: null;
    evolves_to: [
      {
        is_baby: false;
        species: {
          name: string;
          url: string;
        };
        evolution_details: [
          {
            item: null;
            trigger: {
              name: string;
              url: string;
            };
            gender: null;
            held_item: null;
            known_move: null;
            known_move_type: null;
            location: null;
            min_level: number;
            min_happiness: null;
            min_beauty: null;
            min_affection: null;
            needs_overworld_rain: boolean;
            party_species: null;
            party_type: null;
            relative_physical_stats: null;
            time_of_day: string;
            trade_species: null;
            turn_upside_down: boolean;
          }
        ];
        evolves_to: [
          {
            is_baby: false;
            species: {
              name: string;
              url: string;
            };
            evolution_details: [
              {
                item: null;
                trigger: {
                  name: string;
                  url: string;
                };
                gender: null;
                held_item: null;
                known_move: null;
                known_move_type: null;
                location: null;
                min_level: number;
                min_happiness: null;
                min_beauty: null;
                min_affection: null;
                needs_overworld_rain: boolean;
                party_species: null;
                party_type: null;
                relative_physical_stats: null;
                time_of_day: string;
                trade_species: null;
                turn_upside_down: boolean;
              }
            ];
          }
        ];
      }
    ];
  };
};
