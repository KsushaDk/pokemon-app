import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { SearchedPokData } from '@pages/SearchedPokData';
import { MemoryRouter } from 'react-router-dom';

describe('SearchedPokData:', () => {
  let pokPage: RenderResult;

  beforeEach(() => {
    pokPage = render(
      <Provider store={store}>
        <SearchedPokData />
      </Provider>,
      { wrapper: MemoryRouter }
    );
  });

  test('renders', () => {
    expect(pokPage).toBeDefined();
  });

  test('snapshot', () => {
    expect(pokPage).toMatchSnapshot();
  });
});
