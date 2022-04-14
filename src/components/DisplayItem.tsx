import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DisplayData } from './DisplayData';
import { DisplayStats } from './DisplayStats';
import { PokInfo } from '../utils/types';

export const DisplayItem: FC = () => {
  const [pickedPokData, setPickedPokData] = useState<PokInfo | null>(null);
  const params = useParams();
  console.log(params.id);

  const getPickedPok = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((resp) => resp.json())
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
