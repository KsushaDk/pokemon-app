import React, { FC, Fragment } from 'react';
import { toUpperCaseFunc } from '../utils/toUpperCaseFunc';
import { PokInfo } from '../utils/types';

type DisplayStatsProps = {
  pickedPok: PokInfo;
};

export const DisplayStats: FC<DisplayStatsProps> = ({ pickedPok }) => (
  <section className="item__stats">
    <h2>Base stats</h2>
    <dl className="dl-lined">
      {pickedPok.stats.map((stat, index) => (
        <Fragment key={index}>
          <dt>{toUpperCaseFunc(stat.stat.name)}</dt>
          <dd>
            <span>{stat.base_stat}</span>
          </dd>
        </Fragment>
      ))}
    </dl>
  </section>
);
