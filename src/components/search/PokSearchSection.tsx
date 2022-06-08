import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setLoading, setSearchedPokData } from '@redux/actions/actions';
import { IPoksState } from '@redux/reducers/pokemonsReducers';
import { httpGet } from '@utils/request';

import { Btn } from './Btn';
import { Datalist } from './Datalist';

export const PokSearchSection: FC = () => {
  const dispatch = useDispatch();

  const pokUrls = useSelector<IPoksState, IPoksState['pokUrls']>(
    (state) => state.pokUrls
  );

  const nameArr = pokUrls.map((item) => item.name);

  const pokForSearch = useSelector<IPoksState, IPoksState['pokForSearch']>(
    (state) => state.pokForSearch
  );

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (pokForSearch === '') {
      alert('Please select pokemon');
    }
    dispatch(setLoading(true));
    const searchedPokData = httpGet(
      `https://pokeapi.co/api/v2/pokemon/${pokForSearch}`
    );
    searchedPokData.then((result) => {
      dispatch(setSearchedPokData(result));
      dispatch(setLoading(false));
    });
  };

  return (
    <>
      <h5 className="header__title">Search pokemon</h5>
      <form className="header__form">
        <Datalist datainfo={nameArr} id="character" />

        <Link to={pokForSearch ? '/search' : '#'}>
          <Btn btnValue="Search" onClick={handleClick} />
        </Link>
      </form>
    </>
  );
};
