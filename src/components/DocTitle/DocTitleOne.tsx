import React from 'react';
import { useCounter, useDocumentTitle } from 'hooks';

export const DocTitleOne = () => {
  const [counter, increment, decrement, reset] = useCounter(10);

  useDocumentTitle(`My count - hook-  ${counter}`);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={decrement}>dec</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>inc</button>
    </div>
  );
};
