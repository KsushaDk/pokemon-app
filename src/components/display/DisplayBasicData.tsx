import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PokInfo } from '@utils/types';
import { TypeData } from './TypesData';

type DisplayBasicDataProps = {
  pok: PokInfo;
};

export const DisplayBasicData: FC<DisplayBasicDataProps> = ({ pok }) => {
  const types = pok.types.map((item) => item.type.name);

  return (
    <div className="item__data-basic_card">
      <Link className="item__link" to={`/pokemon/${pok.id}`}>
        {pok.name}

        <img src={pok.sprites.other.dream_world.front_default} alt={pok.name} />
        <div className="type_data">
          {types.map((type) => (
            <TypeData type={type} key={type} />
          ))}
        </div>
      </Link>
    </div>
  );
};
