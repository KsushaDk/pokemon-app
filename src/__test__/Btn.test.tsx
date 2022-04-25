import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Btn } from '../components/search/Btn';

const onClick = jest.fn();

describe('Search Btn component:', () => {
  let searchBtn: any;

  beforeEach(() => {
    searchBtn = render(<Btn btnValue="Search" onClick={onClick} />);
  });

  test('renders', () => {
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });

  test('onClick works', () => {
    fireEvent.click(screen.getByText(/Search/));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('snapshot', () => {
    expect(searchBtn).toMatchSnapshot();
  });
});

describe('Show more Btn component:', () => {
  let showMoreBtn: any;

  beforeEach(() => {
    showMoreBtn = render(<Btn btnValue="Show more" onClick={onClick} />);
  });

  test('renders', () => {
    expect(screen.getByText(/Show more/)).toBeInTheDocument();
  });

  test('onClick works', () => {
    fireEvent.click(screen.getByText(/Show more/));

    expect(onClick).toBeCalled();
  });

  test('Show more btn snapshot', () => {
    expect(showMoreBtn).toMatchSnapshot();
  });
});
