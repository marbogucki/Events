import React from 'react';
import { useCounter, useDocumentTitle } from 'hooks';

export const DocTitleTwo = () => {
  const [counter, handleIncrement, handleDecrement, handleReset] = useCounter();

  useDocumentTitle(`Sec count  hook - ${counter}`);

  return (
    <div>
      <p>Second count: {counter}</p>
      <button onClick={handleDecrement}>dec</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleIncrement}>inc</button>
    </div>
  );
};
