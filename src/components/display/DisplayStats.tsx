import React, { FC, Fragment } from 'react';

import { formatToPercent } from 'utils/formatToPercent';
import { getBgColor } from 'utils/getBgColor';
import { toUpperCaseFunc } from 'utils/toUpperCaseFunc';
import { PokInfo } from 'utils/types';

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
          <dd className="item__stats_range">
            <div
              style={{
                width: formatToPercent(stat.base_stat),
                backgroundColor: getBgColor(stat.base_stat),
              }}
              className="item__stats_range-show"
            >
              {stat.base_stat}
            </div>
          </dd>
        </Fragment>
      ))}
    </dl>
  </section>
);
