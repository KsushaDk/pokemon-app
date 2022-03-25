import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { DisplayData } from './DisplayData';
import { DisplayStats } from './DisplayStats';
import { Response } from '../types/types';

type DisplayItemProps = {
  data: Response;
};

export const DisplayItem: FC<DisplayItemProps> = ({ data }) => {
  const params = useParams();
  const pokId = params.id;

  if (data.id.toString() !== pokId) {
    return null;
  }

  return (
    <div className="main__item">
      <DisplayData data={data} />
      <DisplayStats data={data} />
    </div>
  );
};
