import React, { FC, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SearchSection } from './components/SearchSection';
import { Loader } from './components/Loader';
import { Btn } from './components/Btn';
import { DisplaySection } from './components/DisplaySection';
import {
  setPokForSearch,
  setPokUrls,
  setEvoUrls,
  setSearchedPokData,
} from './redux/actions';
import { URL_FOR_POK_LIST, URL_FOR_EVO_LIST } from './utils/constants';

import './style.css';

export const App: FC = () => {
  const dispatch = useDispatch();

  const [urlForPokList, setUrlForPokList] = useState(URL_FOR_POK_LIST);
  const [urlForEvoList, setUrlForEvoList] = useState(URL_FOR_EVO_LIST);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const searchCurrentPokemon = (pok: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`)
      .then((resp) => resp.json())
      .then((result) => {
        dispatch(setSearchedPokData(result));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getPokUrls = (url: string) =>
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        dispatch(setPokUrls(result.results));
        setUrlForPokList(result.next);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

  const getEvoUrls = (url: string) =>
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        dispatch(setEvoUrls(result.results));
        setUrlForEvoList(result.next);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      getPokUrls(urlForPokList);
      getEvoUrls(urlForEvoList);
    }, [urlForPokList, urlForEvoList]);

  useEffect(() => {
    getPokUrls(urlForPokList);
  }, []);

  useEffect(() => {
    getEvoUrls(urlForEvoList);
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
