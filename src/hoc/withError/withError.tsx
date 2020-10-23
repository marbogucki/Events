import React, { ComponentType } from 'react';
import { ErrorInfo } from 'components/shared';

type WithErrorProps = {
  error: string;
};

export const withError = <T extends {}>(WrappedComponent: ComponentType<T>) => {
  return ({ error, ...props }: WithErrorProps) => {
    console.log('error', error);
    return error ? <ErrorInfo /> : <WrappedComponent {...(props as T)} />;
  };
};
