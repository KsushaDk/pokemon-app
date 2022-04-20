import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { httpGet } from '@utils/request';
import { toUpperCaseFunc } from '@utils/toUpperCaseFunc';
import { PokInfo, Species } from '@utils/types';

import { TypeData } from './TypesData';

type DisplayDataProps = {
  pickedPok: PokInfo;
};

export const DisplayData: FC<DisplayDataProps> = ({ pickedPok }) => {
  const [species, setSpecies] = useState(pickedPok.name);

  const types = pickedPok.types.map((item) => item.type.name);
  const abilities = pickedPok.abilities.map((item) =>
    toUpperCaseFunc(item.ability.name)
  );

  useEffect(() => {
    httpGet(pickedPok.species.url).then((result: Species) => {
      result.genera.forEach((item) => {
        if (item.language.name === 'en') {
          setSpecies(toUpperCaseFunc(item.genus));
        }
      });
    });
  }, [pickedPok]);

  return (
    <section className="item__data">
      <img
        src={pickedPok.sprites.other.dream_world.front_default}
        alt={pickedPok.name}
      />
      <article className="item__data_description">
        <h2>Poke&#x301;dex data</h2>
        <h3>{toUpperCaseFunc(pickedPok.name)}</h3>
        <Link to={`/evolution/${pickedPok.id}`}>Evolution</Link>
        <dl className="dl-lined ">
          <dt>National №</dt>
          <dd>{pickedPok.id}</dd>

          <dt>Type</dt>
          <dd>
            {types.map((type) => (
              <TypeData type={type} key={type} />
            ))}
          </dd>

          <dt>Species</dt>
          <dd>{species}</dd>

          <dt>Height</dt>
          <dd>{`${pickedPok.height / 10} m`}</dd>

          <dt>Weight</dt>
          <dd>
            {`${pickedPok.weight / 10} kg`} &nbsp;
            {`(${((pickedPok.weight * 2.2) / 10).toFixed(2)} lbs)`}
          </dd>

          <dt>Abilities</dt>
          <dd>
            {abilities.map((ability) => (
              <span className="ability_style" key={ability}>
                {ability}
              </span>
            ))}
          </dd>
        </dl>
      </article>
    </section>
  );
};
