import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IPoksState } from '../redux/reducers/pokemonsReducers';

import { Loader } from '../components/Loader';

export const SearchedPokData: FC = () => {
  const searchedPokData = useSelector<
    IPoksState,
    IPoksState['searchedPokData']
  >((state) => state.searchedPokData);

  const isLoading = useSelector<IPoksState, IPoksState['isLoading']>(
    (state) => state.isLoading
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="searched__item">
          <Link className="item__link" to={`/pokemon/${searchedPokData?.id}`}>
            {searchedPokData?.name}
            <img
              src={searchedPokData?.sprites.other.dream_world.front_default}
              alt={searchedPokData?.name}
            />
          </Link>
        </div>
      )}
    </>
  );
};
