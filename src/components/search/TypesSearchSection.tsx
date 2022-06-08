import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Btn } from './Btn';
import { Datalist } from './Datalist';

import { setSearchedTypesGroup } from '@redux/actions/actions';
import { IPoksState } from '@redux/reducers/pokemonsReducers';
import { POK_TYPES } from '@utils/constants';

export const TypesSearchSection: FC = () => {
  const dispatch = useDispatch();

  const pokData = useSelector<IPoksState, IPoksState['pokData']>(
    (state) => state.pokData
  );

  const typeForSearch = useSelector<IPoksState, IPoksState['typeForSearch']>(
    (state) => state.typeForSearch
  );

  const getFilteredArr = () => {
    if (typeForSearch === '') {
      alert('Please select pokemon type');
      return null;
    }
    return pokData.filter((pok) => {
      const types = pok.types.map((item) => item.type.name);
      if (types.includes(typeForSearch)) {
        return pok;
      }
    });
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const filteredArr = getFilteredArr();
    if (filteredArr !== null) {
      dispatch(setSearchedTypesGroup(filteredArr));
    }
  };

  return (
    <>
      <h5 className="header__title">Filter Pokemons by Type:</h5>
      <form className="header__form">
        <Datalist datainfo={POK_TYPES} id="type" />
        <Link to={typeForSearch ? '/types' : '#'}>
          <Btn btnValue="Search" onClick={handleClick} />
        </Link>
      </form>
    </>
  );
};
