import React, { ComponentType } from 'react';
import { Loading } from 'components/shared';

type WithLoadingProps = {
  loading: boolean;
};

export const withLoading = <T extends {}>(
  WrappedComponent: ComponentType<T>
) => {
  return ({ loading, ...props }: WithLoadingProps) => {
    return loading ? <Loading /> : <WrappedComponent {...(props as T)} />;
  };
};
