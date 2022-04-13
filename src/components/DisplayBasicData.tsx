import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PokInfo } from '../utils/types';

type DisplayBasicDataProps = {
  pok: PokInfo;
};

export const DisplayBasicData: FC<DisplayBasicDataProps> = ({ pok }) => {
  const bgStyle = `item__data-basic_card ${pok.types[0].type.name}`;

  return (
    <div className={bgStyle}>
      <Link to={`/pokemon/${pok.id}`}>{pok.name}</Link>
      <img src={pok.sprites.other.dream_world.front_default} alt={pok.name} />
    </div>
  );
};
