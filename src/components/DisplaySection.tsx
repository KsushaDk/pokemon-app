import React, { FC } from 'react';
import { DisplayItem } from './DisplayItem';
import { Response } from '../types/types';

type DisplaySectionProps = {
  data: Response;
};

export const DisplaySection: FC<DisplaySectionProps> = ({ data }) => (
  <main className="main">
    <DisplayItem data={data} />
  </main>
);
