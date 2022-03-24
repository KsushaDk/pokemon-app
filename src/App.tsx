import React, { FC, useState } from 'react';
import { SearchSection } from './components/SearchSection';
import { DisplaySection } from './components/DisplaySection';
import { Loader } from './components/Loader';

import { Response } from './types/types';

import './style.css';

export const App: FC = () => {
  const [pokemon, setPokemon] = useState<string | null>(null);
  const [data, setData] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const searchPokemon = () => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        setIsLoading(false);
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="app">
      <SearchSection onClick={searchPokemon} onChange={handleChange} />
      {isLoading && <Loader />}
      {data && <DisplaySection data={data} />}
    </div>
  );
};
