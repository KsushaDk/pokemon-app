import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { ErrorFallback } from '@components/ErrorFallback';
import { Btn } from '@components/search/Btn';

jest.mock('../components/search/Btn');

describe('ErrorFallback:', () => {
  let errorPage: RenderResult;

  const mockedBtn = Btn as jest.MockedFunction<typeof Btn>;
  mockedBtn.mockImplementation(() => <button>Please, try again</button>);

  beforeEach(() => {
    errorPage = render(<ErrorFallback resetErrorBoundary />);
  });

  test('renders when some error apears', () => {
    expect(screen.getByText('Something went wrong...')).toBeInTheDocument();
    expect(screen.getByText(/try again/i)).toBeInTheDocument();
  });

  test('snapshot', () => {
    expect(errorPage).toMatchSnapshot();
  });
});
