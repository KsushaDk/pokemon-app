import React, { FC } from 'react';
import { DisplayData } from './DisplayData';
import { DisplayStats } from './DisplayStats';

export const DisplayItem: FC = () => (
  <div className="app__list_item">
    <DisplayData />
    <DisplayStats />
  </div>
);
