import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/Loader';
import { TypeData } from 'components/display/TypesData';

import { httpGet } from 'utils/request';
import { Evolution, PokInfo } from 'utils/types';
import { IPoksState } from 'redux/reducers/pokemonsReducers';
import { setLoading } from 'redux/actions/actions';

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

  const bgStyle = pickedPok?.types[0].type.name;

  const urls: string[] = [];

  if (evoGroupForPickedPok?.chain.species?.name !== undefined) {
    urls.push(
      `https://pokeapi.co/api/v2/pokemon/${evoGroupForPickedPok?.chain.species?.name}`
    );
  }
  if (evoGroupForPickedPok?.chain.evolves_to[0]?.species.name !== undefined) {
    urls.push(
      `https://pokeapi.co/api/v2/pokemon/${evoGroupForPickedPok?.chain.evolves_to[0]?.species.name}`
    );
  }
  if (
    evoGroupForPickedPok?.chain.evolves_to[0].evolves_to[0]?.species.name !==
    undefined
  ) {
    urls.push(
      `https://pokeapi.co/api/v2/pokemon/${evoGroupForPickedPok?.chain.evolves_to[0].evolves_to[0]?.species.name}`
    );
  }

  let cardStyle = `item__evolution_card ${bgStyle}`;

  useEffect(() => {
    urls.forEach((url) => {
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
      if (index === evolution.length - 1) {
        cardStyle = `item__evolution_card-without-after ${bgStyle}`;
      }
      return (
        <div className={cardStyle} key={item.id}>
          <img
            className="item__evolution_card-avatar"
            src={item.sprites.other.dream_world.front_default}
            alt={item.name}
          />
          <h4>{item.name.toUpperCase()}</h4>
          <div className="type_data">
            {item.types
              .map((i) => i.type.name)
              .map((type) => (
                <TypeData type={type} key={type} />
              ))}
          </div>
        </div>
      );
    });

  return (
    <section className="item__evolution">
      {isLoading ? <Loader /> : evoItem}
    </section>
  );
};
