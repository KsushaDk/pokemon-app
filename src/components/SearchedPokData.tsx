import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IPoksState } from '../redux/pokemonsReducers';

export const SearchedPokData: FC = () => {
  const searchedPokData = useSelector<
  IPoksState,
  IPoksState['searchedPokData']
  >((state) => state.searchedPokData);

  return (
    <div className="searched__item">
      <Link className="item__link" to={`/pokemon/${searchedPokData?.id}`}>
        {searchedPokData?.name}
        <img
          src={searchedPokData?.sprites.other.dream_world.front_default}
          alt={searchedPokData?.name}
        />
      </Link>
    </div>
  );
};
