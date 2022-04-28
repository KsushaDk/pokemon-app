import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DisplayData } from '@components/display/DisplayData';
import { fakePokData } from './constants';
import { Species } from '@components/display/Species';

jest.mock('../components/display/Species');

describe('DisplayData:', () => {
  let displayData: RenderResult;

  const mockedSpecies = Species as jest.MockedFunction<typeof Species>;
  mockedSpecies.mockImplementation(() => <dd>Species test</dd>);

  beforeEach(() => {
    displayData = render(<DisplayData pickedPok={fakePokData} />, {
      wrapper: MemoryRouter,
    });
  });

  test('renders', async () => {
    expect(screen.getByText('Pokédex data')).toBeInTheDocument();
  });

  test('renders mocked species module', async () => {
    expect(screen.getByText(/species test/i)).toBeInTheDocument();
    expect(mockedSpecies).toBeCalled();
  });

  test('snapshot', () => {
    expect(displayData).toMatchSnapshot();
  });
});
