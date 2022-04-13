import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { DisplayData } from './DisplayData';
import { DisplayStats } from './DisplayStats';
import { PokInfo } from '../utils/types';

type DisplayItemProps = {
  data: [PokInfo];
};

export const DisplayItem: FC<DisplayItemProps> = ({ data }) => {
  const params = useParams();

  const pickedPok = data.find(
    (item: PokInfo) => String(item.id) === `${params.id}`
  );

  return (
    <div className="main__item">
      {pickedPok && (
        <>
          <DisplayData pickedPok={pickedPok} />
          <DisplayStats pickedPok={pickedPok} />
        </>
      )}
    </div>
  );
};
