import React, { FC } from 'react';
import { Data } from '../types/types';

type DisplayBasicDataProps = {
  data: Data;
};

export const DisplayBasicData: FC<DisplayBasicDataProps> = ({ data }) => (
  <ul className="item__data-basic">
    {data.results.map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
);
