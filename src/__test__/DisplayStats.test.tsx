import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DisplayStats } from '@components/display/DisplayStats';
import { fakePokData } from './constants';

describe('DisplayStats:', () => {
  let displayStats: RenderResult;

  beforeEach(() => {
    displayStats = render(<DisplayStats pickedPok={fakePokData} />, {
      wrapper: MemoryRouter,
    });
  });

  test('renders', async () => {
    expect(screen.getByText(/base stats/i)).toBeInTheDocument();
  });

  test('snapshot', () => {
    expect(displayStats).toMatchSnapshot();
  });
});
