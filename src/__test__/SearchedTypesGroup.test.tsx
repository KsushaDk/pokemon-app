import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { SearchedTypesGroup } from '@pages/SearchedTypesGroup';
import { MemoryRouter } from 'react-router-dom';

describe('SearchedTypesGroup:', () => {
  let typesGroup: RenderResult;

  beforeEach(() => {
    typesGroup = render(
      <Provider store={store}>
        <SearchedTypesGroup />
      </Provider>,
      { wrapper: MemoryRouter }
    );
  });

  test('renders', () => {
    expect(typesGroup).toBeDefined();
  });

  test('snapshot', () => {
    expect(typesGroup).toMatchSnapshot();
  });
});
