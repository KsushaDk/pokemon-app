import React, { FC, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { SearchedPokData } from './SearchedPokData';
import { DisplayItem } from './DisplayItem';
import { DisplayBasicData } from './DisplayBasicData';
import { Btn } from './Btn';
import { EvolutionPage } from '../pages/EvolutionPage';

import { IPoksState } from '../redux/pokemonsReducers';
import { PokInfo } from '../utils/types';
import { httpGet } from '../utils/request';
import {
  getEvoUrls,
  getPokUrls,
  setEvoGroup,
  setPokData,
} from '../redux/actions';

export const DisplaySection: FC = () => {
  const dispatch = useDispatch();

  const searchedPokData = useSelector<
    IPoksState,
    IPoksState['searchedPokData']
  >((state) => state.searchedPokData);

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
            searchedPokData ? (
              <SearchedPokData />
            ) : (
              <>
                <section className="item__data-basic">
                  {pokData.map((pok: PokInfo) => (
                    <DisplayBasicData pok={pok} key={pok.id} />
                  ))}
                </section>
                <Btn btnValue="Show more" onClick={handleClick} />
              </>
            )
          }
        />
        <Route path="/pokemon/:id" element={<DisplayItem />} />
        <Route path="/evolution/:id" element={<EvolutionPage />} />
      </Routes>
    </main>
  );
};
