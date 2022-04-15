import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchSection } from './components/SearchSection';
import { Loader } from './components/Loader';
import { Btn } from './components/Btn';
import { DisplaySection } from './components/DisplaySection';
import {
  getPokUrls,
  getEvoUrls,
  setPokForSearch,
  setSearchedPokData,
  setLoading,
} from './redux/actions';

import './style.css';
import { IPoksState } from './redux/pokemonsReducers';
import { httpGet } from './utils/request';

export const App: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector<IPoksState, IPoksState['isLoading']>(
    (state) => state.isLoading
  );

  const searchCurrentPokemon = (pok: string) => {
    const searchedPokData = httpGet(`https://pokeapi.co/api/v2/pokemon/${pok}`);
    searchedPokData.then((result) => {
      dispatch(setSearchedPokData(result));
      dispatch(setLoading(false));
    });
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch(getPokUrls());
      dispatch(getEvoUrls());
    }, []);

  useEffect(() => {
    dispatch(getPokUrls());
    dispatch(getEvoUrls());
    dispatch(setLoading(false));
  }, []);

  const onAddSearchPok = (pok: string) => {
    dispatch(setPokForSearch(pok));
    searchCurrentPokemon(pok);
  };

  return (
    <div className="app">
      <SearchSection setPokForSearch={onAddSearchPok} />

      {isLoading ? <Loader /> : <DisplaySection />}

      <Btn btnValue="Show more" onClick={handleClick} />
    </div>
  );
};
