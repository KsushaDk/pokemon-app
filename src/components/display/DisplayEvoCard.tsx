import React, { FC } from 'react';
import { PokInfo, PokInfoTest } from '@utils/types';
import { TypeData } from './TypesData';

type DisplayEvoCardProps = {
  pok: PokInfo | PokInfoTest;
  index: number;
  length: number;
};

export const DisplayEvoCard: FC<DisplayEvoCardProps> = ({
  pok,
  index,
  length,
}) => {
  let cardStyle = `item__evolution_card ${pok.types[0].type.name}`;

  if (index === length - 1) {
    cardStyle = `item__evolution_card-without-after ${pok.types[0].type.name}`;
  }

  return (
    <div className={cardStyle} key={pok.id}>
      <img
        className="item__evolution_card-avatar"
        src={pok.sprites.other.dream_world.front_default}
        alt={pok.name}
      />
      <h4>{pok.name.toUpperCase()}</h4>
      <div className="type_data">
        {pok.types
          .map((i) => i.type.name)
          .map((type) => (
            <TypeData type={type} key={type} />
          ))}
      </div>
    </div>
  );
};
