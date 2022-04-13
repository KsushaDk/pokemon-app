import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { toUpperCaseFunc } from '../utils/toUpperCaseFunc';
import { PokInfo } from '../utils/types';

type DisplayDataProps = {
  pickedPok: PokInfo;
};

export const DisplayData: FC<DisplayDataProps> = ({ pickedPok }) => (
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
        <dd>{toUpperCaseFunc(pickedPok.types[0].type.name)}</dd>

        <dt>Species</dt>
        <dd>{toUpperCaseFunc(pickedPok.moves[0].move.name)}</dd>

        <dt>Height</dt>
        <dd>{pickedPok.height}</dd>

        <dt>Weight</dt>
        <dd>{`${pickedPok.weight / 10} kg`}</dd>

        <dt>Abilities</dt>
        <dd>
          {toUpperCaseFunc(pickedPok.abilities[0].ability.name)}
          {pickedPok.abilities[0].is_hidden && '(hidden)'}
          {/* {toUpperCaseFunc(data.abilities[0].ability.name)}
            {data.abilities[0].is_hidden && '(hidden)'} */}
        </dd>
      </dl>
    </article>
  </section>
);
