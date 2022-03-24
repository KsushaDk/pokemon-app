import React, { FC } from 'react';
import { Response } from '../types/types';

type DisplayDataProps = {
  data: Response;
};

export const DisplayData: FC<DisplayDataProps> = ({ data }) => {
  const toUpperCase = (str: string) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <section className="item__data">
      <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
      <article className="item__data_description">
        <h2>Poke&#x301;dex data</h2>
        <h3>{toUpperCase(data.name)}</h3>
        <dl className="dl-lined ">
          <dt>National №</dt>
          <dd>{data.id}</dd>

          <dt>Type</dt>
          <dd>{toUpperCase(data.types[0].type.name)}</dd>

          <dt>Species</dt>
          <dd>{toUpperCase(data.moves[0].move.name)}</dd>

          <dt>Height</dt>
          <dd>{data.height}</dd>

          <dt>Weight</dt>
          <dd>{`${data.weight / 10} kg`}</dd>

          <dt>Abilities</dt>
          <dd>
            {toUpperCase(data.abilities[0].ability.name)}
            {data.abilities[0].is_hidden && '(hidden)'}
            {/* {toUpperCase(data.abilities[0].ability.name)}
            {data.abilities[0].is_hidden && '(hidden)'} */}
          </dd>
        </dl>
      </article>
    </section>
  );
};
