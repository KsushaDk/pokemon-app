import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PokInfo } from '../utils/types';

type SearchedPoDataProps = {
  currentPokData: PokInfo | null;
};

export const SearchedPoData: FC<SearchedPoDataProps> = ({ currentPokData }) => (
  <div className="searched__item">
    <Link to={`/pokemon/${currentPokData?.id}`}>{currentPokData?.name}</Link>
    <img
      src={currentPokData?.sprites.other.dream_world.front_default}
      alt={currentPokData?.name}
    />
  </div>
);
