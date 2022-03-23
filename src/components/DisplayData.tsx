import React, { FC } from 'react';

export const DisplayData: FC = () => (
  <section className="item__data">
    <img src="" alt="" />
    <article className="item__data_description">
      <h2>Pokedex data</h2>
      <dl className="dl-lined ">
        <dt>National №</dt>
        <dd>25</dd>

        <dt>Type</dt>
        <dd>Electric</dd>

        <dt>Species</dt>
        <dd>Mouse Pokemon</dd>

        <dt>Height</dt>
        <dd>0.4m</dd>

        <dt>Weight</dt>
        <dd>6.0kg</dd>

        <dt>Abilities</dt>
        <dd>hidden</dd>
      </dl>
    </article>
  </section>
);
