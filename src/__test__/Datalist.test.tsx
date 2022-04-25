import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Datalist } from '@components/search/Datalist';
import { POK_TYPES } from '@utils/constants';
import { store } from '@redux/store';

const data = POK_TYPES;

describe('Datalist component', () => {
  let datalist: any;

  beforeEach(() => {
    datalist = render(
      <Provider store={store}>
        <Datalist datainfo={data} id={'type'} />
      </Provider>
    );
  });

  test('Datalist renders', () => {
    expect(screen.getByText(/ground/)).toBeInTheDocument();
  });

  test('Datalist shapshot', () => {
    expect(datalist).toMatchSnapshot();
  });
});
