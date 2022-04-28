import React from 'react';
import { render, RenderResult, screen, waitFor } from '@testing-library/react';
import { CurrentPokPage } from '@pages/CurrentPokPage';
import { DisplayData } from '@components/display/DisplayData';
import { DisplayStats } from '@components/display/DisplayStats';
import { fakePokData } from './constants';

const mockedFetch = (global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock);

jest.mock('../components/display/DisplayData');
jest.mock('../components/display/DisplayStats');

describe('CurrentPokPage:', () => {
  let pokPage: RenderResult;

  const mockedDisplayData = DisplayData as jest.MockedFunction<
    typeof DisplayData
  >;
  mockedDisplayData.mockImplementation(() => <div>{fakePokData.name}</div>);

  const mockedDisplayStata = DisplayStats as jest.MockedFunction<
    typeof DisplayStats
  >;
  mockedDisplayStata.mockImplementation(() => (
    <div>{fakePokData.stats[0].stat.name}</div>
  ));

  beforeEach(async () => {
    pokPage = await waitFor(() => render(<CurrentPokPage />));
  });

  test('renders with mocked components', async () => {
    expect(mockedFetch).toBeCalled();
    expect(mockedDisplayData).toBeCalled();
    expect(mockedDisplayStata).toBeCalled();

    expect(screen.getByText(/charmeleon/i)).toBeInTheDocument();
  });

  test('snapshot', () => {
    expect(pokPage).toMatchSnapshot();
  });
});
