import React, { FC, useState, useEffect } from 'react';
import { URL } from '../utils/constants';

type Datalist = {
  name: string;
  url: string;
};

type SearchSectionProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const SearchSection: FC<SearchSectionProps> = ({
  onClick,
  onChange,
}) => {
  const [datalist, setDatalist] = useState<[Datalist] | null>(null);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((result) => setDatalist(result.results))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">Search pokemon</h1>
      <input
        className="header__input"
        list="character"
        type="text"
        onChange={onChange}
      />
      {datalist && (
        <datalist id="character">
          {datalist.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
        </datalist>
      )}

      <button className="header__btn" type="button" onClick={onClick}>
        Search Pokemon
      </button>
    </header>
  );
};
