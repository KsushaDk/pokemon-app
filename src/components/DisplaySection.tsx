import React, { FC, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PoksState } from '../redux/pokemonsReducers';
import { DisplayItem } from './DisplayItem';
import { DisplayBasicData } from './DisplayBasicData';
import { EvolutionPage } from '../pages/EvolutionPage';
import { PokInfo } from '../utils/types';

export const DisplaySection: FC = () => {
  const [pokData, setPokData] = useState<any>([]);
  const [evoGroup, setEvoGroup] = useState<any>([]);

  const pokUrls = useSelector<PoksState, PoksState['pokUrls']>(
    (state) => state.pokUrls
  );

  const evoUrls = useSelector<PoksState, PoksState['evoUrls']>(
    (state) => state.evoUrls
  );

  useEffect(() => {
    pokUrls.forEach((pok) =>
      fetch(pok.url)
        .then((resp) => resp.json())
        .then((result) => {
          setPokData((prevState: any) => [...prevState, result]);
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
          setEvoGroup((prevState: any) => [...prevState, result]);
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
            <section className="item__data-basic">
              {pokData.map((pok: PokInfo) => (
                <DisplayBasicData pok={pok} key={pok.id} />
              ))}
            </section>
          }
        />
        <Route path="/pokemon/:id" element={<DisplayItem data={pokData} />} />
        <Route
          path="/evolution/:id"
          element={<EvolutionPage data={pokData} evoGroup={evoGroup} />}
        />
      </Routes>
    </main>
  );
};
