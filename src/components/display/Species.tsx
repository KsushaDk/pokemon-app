import React, { FC, useState, useEffect } from 'react';
import { httpGet } from '@utils/request';
import { SpeciesType } from '@utils/types';
import { toUpperCaseFunc } from '@utils/toUpperCaseFunc';

type SpeciesProps = {
  speciesUrl: string;
};

export const Species: FC<SpeciesProps> = ({ speciesUrl }) => {
  const [species, setSpecies] = useState('Pokémon');

  useEffect(() => {
    httpGet(speciesUrl).then((result: SpeciesType) => {
      result.genera.forEach((item) => {
        if (item.language.name === 'en') {
          setSpecies(toUpperCaseFunc(item.genus));
        }
      });
    });
  }, []);

  return <dd>{species}</dd>;
};
