import React, { FC } from 'react';
import { DisplayData } from './DisplayData';
import { DisplayStats } from './DisplayStats';
import { Response } from '../types/types';

type DisplayItemProps = {
  data: Response;
};

export const DisplayItem: FC<DisplayItemProps> = ({ data }) => (
  <div className="main__item">
    <DisplayData data={data} />
    <DisplayStats data={data} />
  </div>
);
