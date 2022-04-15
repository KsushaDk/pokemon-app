import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../components/Loader';

import { httpGet } from '../utils/request';

import { Evolution, PokInfo } from '../utils/types';
import { IPoksState } from '../redux/pokemonsReducers';
import { setLoading } from '../redux/actions';

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

  const evoGroupForPickedPok = evoGroup.find((item: Evolution) => {
    if (
      item.chain.species?.name !== pickedPok?.name &&
      item.chain.evolves_to[0]?.species.name !== pickedPok?.name &&
      item.chain.evolves_to[0].evolves_to[0]?.species.name !== pickedPok?.name
    ) {
      return false;
    }

    return item;
  });

  const urls = [
    `https://pokeapi.co/api/v2/pokemon/${evoGroupForPickedPok?.chain.species?.name}`,
    `https://pokeapi.co/api/v2/pokemon/${evoGroupForPickedPok?.chain.evolves_to[0]?.species.name}`,
    `https://pokeapi.co/api/v2/pokemon/${evoGroupForPickedPok?.chain.evolves_to[0].evolves_to[0]?.species.name}`,
  ];

  useEffect(() => {
    urls.forEach((url) => {
      const pokDataForEvo = httpGet(url);
      pokDataForEvo.then((result) => {
        setEvolution((prevState: PokInfo[]) => [...prevState, result]);
        dispatch(setLoading(false));
      });
    });
  }, []);

  const bgStyle = `item__evolution_card ${pickedPok?.types[0].type.name}`;

  return (
    <section className="item__evolution">
      {isLoading ? (
        <Loader />
      ) : (
        evolution.map((item: PokInfo) => (
          <div className={bgStyle} key={item.id}>
            <img
              src={item.sprites.other.dream_world.front_default}
              alt={item.name}
            />
            <p>#0{item.id}</p>
            <h4>{item.name.toUpperCase()}</h4>
            <p>{item.types[0].type.name}</p>
          </div>
        ))
      )}
    </section>
  );
};
