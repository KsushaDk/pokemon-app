import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { AllPokPage } from '@pages/AllPokPage';
import { MemoryRouter } from 'react-router-dom';

describe('AllPokPage:', () => {
  let mainPage: any;

  beforeEach(() => {
    mainPage = render(
      <Provider store={store}>
        <AllPokPage />
      </Provider>,
      { wrapper: MemoryRouter }
    );
  });

  test('renders', () => {
    expect(mainPage).toBeDefined();
  });
});
