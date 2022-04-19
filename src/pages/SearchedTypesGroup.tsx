import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { IPoksState } from '../redux/reducers/pokemonsReducers';
import { DisplayBasicData } from '../components/display/DisplayBasicData';

export const SearchedTypesGroup: FC = () => {
  const searshedTypesGroup = useSelector<
    IPoksState,
    IPoksState['searchedTypesGroup']
  >((state) => state.searchedTypesGroup);

  return (
    <section className="item__data-basic">
      {searshedTypesGroup.map((pok) => {
        return <DisplayBasicData pok={pok} key={pok.id} />;
      })}
    </section>
  );
};
