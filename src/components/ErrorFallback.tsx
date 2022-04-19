import React, { FC } from 'react';
import { Btn } from './search/Btn';

type ErrorFallbackProps = {
  // error: any;
  resetErrorBoundary: any;
};

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  // error,
  resetErrorBoundary,
}) => (
  <div role="alert" className="error">
    <p className="error__text">Something went wrong...</p>
    <Btn onClick={resetErrorBoundary} btnValue="Try again" />
  </div>
);
