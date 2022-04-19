import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DisplayData } from '../components/display/DisplayData';
import { DisplayStats } from '../components/display/DisplayStats';

import { PokInfo } from '../utils/types';
import { httpGet } from '../utils/request';

export const CurrentPokPage: FC = () => {
  const [pickedPokData, setPickedPokData] = useState<PokInfo | null>(null);
  const params = useParams();

  const getPickedPok = () => {
    const dataForPickedPok = httpGet(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    dataForPickedPok
      .then((result) => {
        setPickedPokData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPickedPok();
  }, []);

  return (
    <div className="main__item">
      {pickedPokData && (
        <>
          <DisplayData pickedPok={pickedPokData} />
          <DisplayStats pickedPok={pickedPokData} />
        </>
      )}
    </div>
  );
};
