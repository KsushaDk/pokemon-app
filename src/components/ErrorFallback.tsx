import React, { FC } from 'react';

type ErrorFallbackProps = {
  // error: any;
  resetErrorBoundary: any;
};

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  // error,
  resetErrorBoundary,
}) => (
  <div role="alert" className="error">
    <p className="error__text">There is no such pokemon...</p>
    <button className="error__btn" type="button" onClick={resetErrorBoundary}>
      Try again
    </button>
  </div>
);
