import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Response } from '../types/types';

type DisplayBasicDataProps = {
  pok: Response;
};

export const DisplayBasicData: FC<DisplayBasicDataProps> = ({ pok }) => (
  <div className="item__data-basic_card">
    <Link to={`/pokemon/${pok.id}`}>{pok.name}</Link>

    <img src={pok.sprites.other.dream_world.front_default} alt={pok.name} />
  </div>
);
