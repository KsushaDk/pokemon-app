import React, { FC, useEffect, useCallback, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { SearchedPokData } from './SearchedPokData';
import { CurrentPokPage } from './CurrentPokPage';
import { DisplayBasicData } from 'components/display/DisplayBasicData';
import { Btn } from 'components/search/Btn';
import { EvolutionPage } from './EvolutionPage';
import { SearchedTypesGroup } from './SearchedTypesGroup';

import { IPoksState } from 'redux/reducers/pokemonsReducers';
import { PokInfo } from 'utils/types';
import { httpGet } from 'utils/request';
import {
  getEvoUrls,
  getPokUrls,
  setEvoGroup,
  setPokData,
} from 'redux/actions/actions';

export const AllPokPage: FC = () => {
  const [numberOfShownPok, setNumberOfShownPok] = useState(20);
  const dispatch = useDispatch();

  const pokUrls = useSelector<IPoksState, IPoksState['pokUrls']>(
    (state) => state.pokUrls
  );

  const pokData = useSelector<IPoksState, IPoksState['pokData']>(
    (state) => state.pokData
  );

  const evoUrls = useSelector<IPoksState, IPoksState['evoUrls']>(
    (state) => state.evoUrls
  );

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch(getPokUrls());
      dispatch(getEvoUrls());
      setNumberOfShownPok((prevState) => prevState + 20);
    }, []);

  useEffect(() => {
    pokUrls.forEach((pok) => {
      httpGet(pok.url).then((result) => {
        dispatch(setPokData(result));
      });
    });
  }, [pokUrls]);

  useEffect(() => {
    evoUrls.forEach((evo) => {
      httpGet(evo.url).then((result) => {
        dispatch(setEvoGroup(result));
      });
    });
  }, [evoUrls]);

  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="item__data-basic">
                {pokData.slice(0, numberOfShownPok).map((pok: PokInfo) => (
                  <DisplayBasicData pok={pok} key={pok.id} />
                ))}
              </section>
              <Btn btnValue="Show more" onClick={handleClick} />
            </>
          }
        />
        <Route path="/search" element={<SearchedPokData />} />
        <Route path="/types" element={<SearchedTypesGroup />} />
        <Route path="/pokemon/:id" element={<CurrentPokPage />} />
        <Route path="/evolution/:id" element={<EvolutionPage />} />
      </Routes>
    </main>
  );
};
