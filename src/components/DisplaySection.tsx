import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IPoksState } from '../redux/pokemonsReducers';
import { DisplayItem } from './DisplayItem';
import { DisplayBasicData } from './DisplayBasicData';
import { EvolutionPage } from '../pages/EvolutionPage';
import { PokInfo } from '../utils/types';
import { setEvoGroup, setPokData } from '../redux/actions';
import { SearchedPokData } from './SearchedPokData';

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

  useEffect(() => {
    pokUrls.forEach((pok) =>
      fetch(pok.url)
        .then((resp) => resp.json())
        .then((result) => {
          dispatch(setPokData(result));
        })
        .catch((error) => {
          console.error(error);
        })
    );
  }, [pokUrls]);

  useEffect(() => {
    evoUrls.forEach((evo) =>
      fetch(evo.url)
        .then((resp) => resp.json())
        .then((result) => {
          dispatch(setEvoGroup(result));
        })
        .catch((error) => {
          console.error(error);
        })
    );
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
              <section className="item__data-basic">
                {pokData.map((pok: PokInfo) => (
                  <DisplayBasicData pok={pok} key={pok.id} />
                ))}
              </section>
            )
          }
        />
        <Route path="/pokemon/:id" element={<DisplayItem />} />
        <Route path="/evolution/:id" element={<EvolutionPage />} />
      </Routes>
    </main>
  );
};
