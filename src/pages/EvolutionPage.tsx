import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '@components/Loader';
import { DisplayEvoCard } from '@components/display/DisplayEvoCard';

import { httpGet } from '@utils/request';
import { getEvoGroupForPickedPok } from '@utils/getEvoGroupForPickedPok';
import { getUrlsForPoks } from '@utils/getUrlsForPoks';
import { PokInfo } from '@utils/types';

import { IPoksState } from '@redux/reducers/pokemonsReducers';
import { setLoading } from '@redux/actions/actions';

export const EvolutionPage: FC = () => {
  const [evolution, setEvolution] = useState<PokInfo[]>([]);

  const params = useParams();
  const dispatch = useDispatch();

  const evoGroup = useSelector<IPoksState, IPoksState['evoGroup']>(
    (state) => state.evoGroup
  );

  const pokData = useSelector<IPoksState, IPoksState['pokData']>(
    (state) => state.pokData
  );

  const pickedPok = pokData.find(
    (item: PokInfo) => String(item.id) === `${params.id}`
  );

  const isLoading = useSelector<IPoksState, IPoksState['isLoading']>(
    (state) => state.isLoading
  );

  const evoGroupForPickedPok = getEvoGroupForPickedPok(evoGroup, pickedPok);

  const urlsForPoks = getUrlsForPoks(evoGroupForPickedPok);

  useEffect(() => {
    urlsForPoks.forEach((url) => {
      httpGet(url).then((result: PokInfo) => {
        if (result.id >= 100) {
          result.id = result.id / 1000;
        }
        setEvolution((prevState: PokInfo[]) => [...prevState, result]);
        dispatch(setLoading(false));
      });
    });
  }, []);

  const evoItem = evolution
    .sort(function (a: PokInfo, b: PokInfo) {
      return a.id - b.id;
    })
    .map((item: PokInfo, index) => {
      return (
        <DisplayEvoCard
          pok={item}
          index={index}
          key={item.id}
          length={evolution.length}
        />
      );
    });

  return (
    <section className="item__evolution">
      {isLoading ? <Loader /> : evoItem}
    </section>
  );
};
