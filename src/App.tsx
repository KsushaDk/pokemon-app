import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchSection } from './components/search/SearchSection';
import { Loader } from './components/Loader';
import { AllPokPage } from './pages/AllPokPage';

import { getPokUrls, getEvoUrls, setLoading } from './redux/actions/actions';
import { IPoksState } from './redux/reducers/pokemonsReducers';

import './style.css';

export const App: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector<IPoksState, IPoksState['isLoading']>(
    (state) => state.isLoading
  );

  useEffect(() => {
    dispatch(getPokUrls());
    dispatch(getEvoUrls());
    dispatch(setLoading(false));
  }, []);

  return (
    <div className="app">
      <SearchSection />

      {isLoading ? <Loader /> : <AllPokPage />}
    </div>
  );
};
