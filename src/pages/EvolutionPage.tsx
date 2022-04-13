import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Evolution, PokInfo } from '../utils/types';
import { Loader } from '../components/Loader';

type EvolutionPageProps = {
  data: [PokInfo];
  evoGroup: [Evolution];
};

export const EvolutionPage: FC<EvolutionPageProps> = ({ data, evoGroup }) => {
  const [evolution, setEvolution] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams();

  const pickedPok = data.find(
    (item: PokInfo) => String(item.id) === `${params.id}`
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
    urls.forEach((url) =>
      fetch(url)
        .then((resp) => resp.json())
        .then((result) => {
          setEvolution((prevState: any) => [...prevState, result]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        })
    );
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
