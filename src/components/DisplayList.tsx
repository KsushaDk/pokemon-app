import React, { FC } from 'react';
import { DisplayItem } from './DisplayItem';

export const DisplayList: FC = () => (
  <main className="app__list">
    <DisplayItem />
    <DisplayItem />
  </main>
);
