import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { DisplayBasicData } from '@components/display/DisplayBasicData';
import { BrowserRouter } from 'react-router-dom';
import { fakePokData } from './constants';
import { TypeData } from '@components/display/TypesData';

jest.mock('../components/display/TypesData');

describe('DisplayBasicData:', () => {
  let displaybasicData: RenderResult;

  const mockedTypeData = TypeData as jest.MockedFunction<typeof TypeData>;
  mockedTypeData.mockImplementation(() => <span>Fire</span>);

  beforeEach(() => {
    displaybasicData = render(
      <BrowserRouter>
        <DisplayBasicData pok={fakePokData} />
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
    expect(displaybasicData).toMatchSnapshot();
  });
});
