import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DisplayData } from './DisplayData';
import { DisplayStats } from './DisplayStats';
import { PokInfo } from '../utils/types';
import { IPoksState } from '../redux/pokemonsReducers';

export const DisplayItem: FC = () => {
  const params = useParams();

  const pokData = useSelector<IPoksState, IPoksState['pokData']>(
    (state) => state.pokData
  );

  const pickedPok = pokData.find(
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
