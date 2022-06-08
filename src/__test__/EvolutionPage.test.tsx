import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { render, RenderResult, screen, waitFor } from '@testing-library/react';
import { EvolutionPage } from '@pages/EvolutionPage';
import { DisplayEvoCard } from '@components/display/DisplayEvoCard';
import { getUrlsForPoks } from '../utils/getUrlsForPoks';
import { getEvoGroupForPickedPok } from '../utils/getEvoGroupForPickedPok';
import { allFakeUrls, groupResult } from './constants';

jest.mock('../components/display/DisplayEvoCard');
jest.mock('../utils/getUrlsForPoks');
jest.mock('../utils/getEvoGroupForPickedPok');

const mockedFetch = (global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock);

describe('EvolutionPage:', () => {
  let evoPage: RenderResult;

  const mockedEvoCard = DisplayEvoCard as jest.MockedFunction<
    typeof DisplayEvoCard
  >;
  mockedEvoCard.mockImplementation(() => {
    return <div>charmeleon</div>;
  });

  const mockedEvoGroup = getEvoGroupForPickedPok as jest.MockedFunction<
    typeof getEvoGroupForPickedPok
  >;
  mockedEvoGroup.mockImplementation(() => groupResult);

  const mockedEvoUrls = getUrlsForPoks as jest.MockedFunction<
    typeof getUrlsForPoks
  >;
  mockedEvoUrls.mockImplementation(() => allFakeUrls);

  beforeEach(async () => {
    evoPage = await waitFor(() =>
      render(
        <Provider store={store}>
          <EvolutionPage />
        </Provider>
      )
    );
  });

  test('renders with mocked modules', async () => {
    expect(mockedEvoGroup).toBeCalled();
    expect(mockedEvoGroup).toReturnWith(groupResult);
    expect(mockedEvoUrls).toBeCalled();
    expect(mockedEvoUrls).toReturnWith(allFakeUrls);
    expect(mockedFetch).toBeCalled();
    expect(mockedEvoCard).toBeCalled();
    expect(screen.getAllByText(/charmeleon/i)).toBeDefined();
  });

  test('snapshot', () => {
    expect(evoPage).toMatchSnapshot();
  });
});
