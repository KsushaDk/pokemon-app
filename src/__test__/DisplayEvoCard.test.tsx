import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { DisplayEvoCard } from '@components/display/DisplayEvoCard';
import { BrowserRouter } from 'react-router-dom';
import { fakePokData } from './constants';
import { TypeData } from '@components/display/TypesData';

jest.mock('../components/display/TypesData');

describe('DisplayEvoCard:', () => {
  let displayevoData: RenderResult;

  const mockedTypeData = TypeData as jest.MockedFunction<typeof TypeData>;
  mockedTypeData.mockImplementation(() => <span>Fire</span>);

  beforeEach(() => {
    displayevoData = render(
      <BrowserRouter>
        <DisplayEvoCard pok={fakePokData} index={1} length={2} />
      </BrowserRouter>
    );
  });

  test('renders', async () => {
    expect(screen.getByText(/charmeleon/i)).toBeInTheDocument();
  });

  test('renders mocked type module', async () => {
    expect(screen.getByText(/fire/i)).toBeInTheDocument();
    expect(mockedTypeData).toBeCalled();
  });

  test('snapshot', () => {
    expect(displayevoData).toMatchSnapshot();
  });
});
