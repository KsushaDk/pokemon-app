import React, { FC, Fragment } from 'react';
import { Response } from '../types/types';

type DisplayStatsProps = {
  data: Response;
};

export const DisplayStats: FC<DisplayStatsProps> = ({ data }) => {
  const toUpperCase = (str: string) => {
    if (!str) return str;

    if (str === 'hp') {
      return str[0].toUpperCase() + str[1].toUpperCase();
    }

    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <section className="item__stats">
      <h2>Base stats</h2>
      <dl className="dl-lined">
        {data.stats.map((stat, index) => (
          <Fragment key={index}>
            <dt>{toUpperCase(stat.stat.name)}</dt>
            <dd>
              <span>{stat.effort}</span>
              <input
                type="range"
                name={stat.stat.name}
                min="0"
                max={`${stat.base_stat}`}
                step="1"
                value={stat.effort}
                readOnly
              />
            </dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
};
