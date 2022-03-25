import React, { FC, useState, useEffect, Suspense } from 'react';
import { Loader } from './components/Loader';
import { Btn } from './components/Btn';
import { URL } from './utils/constants';
import { Data } from './types/types';

import './style.css';

export const App: FC = () => {
  const [url, setUrl] = useState<string>(URL);
  const [data, setData] = useState<Data | null>(null);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (data !== null) {
      setUrl(data.next);
    }
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  const DisplaySection = React.lazy(
    () => import('./components/DisplaySection')
  );

  return (
    <div className="app">
      {/* <SearchSection onClick={searchPokemon} onChange={handleChange} /> */}
      <Suspense fallback={<Loader />}>
        {data && <DisplaySection data={data} />}
      </Suspense>
      <Btn btnValue="Show more" onClick={handleClick} />
    </div>
  );
};
