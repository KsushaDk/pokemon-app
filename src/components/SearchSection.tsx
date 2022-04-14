import React, { FC, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { PokUrls } from '../redux/actions';
import { IPoksState } from '../redux/pokemonsReducers';

type SearchSectionProps = {
  setPokForSearch(search: string): void;
};

export const SearchSection: FC<SearchSectionProps> = ({ setPokForSearch }) => {
  const [searchedPok, setSearchedPok] = useState('');

  const pokUrls = useSelector<IPoksState, IPoksState['pokUrls']>(
    (state) => state.pokUrls
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedPok(e.target.value);
  };

  const handleClick = () => {
    setPokForSearch(searchedPok);
    setSearchedPok('');
  };

  return (
    <header className="header">
      <h1 className="header__title">Search pokemon</h1>
      <input
        className="header__input"
        list="character"
        type="text"
        value={searchedPok}
        onChange={handleChange}
      />
      {pokUrls && (
        <datalist id="character">
          {pokUrls.map((item: PokUrls, index: number) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
        </datalist>
      )}

      <button className="header__btn" type="button" onClick={handleClick}>
        Search
      </button>
    </header>
  );
};
