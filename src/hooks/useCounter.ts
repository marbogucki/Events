import { useState } from 'react';

type SetCounter = () => void;

type UseCounter = (
  defaultCounter?: number
) => [number, SetCounter, SetCounter, SetCounter];

export const useCounter: UseCounter = (defaultCounter: number = 0) => {
  const [counter, setCounter] = useState<number>(defaultCounter);

  const handleIncrement: SetCounter = () =>
    setCounter((counter: number) => counter + 1);

  const handleDecrement: SetCounter = () =>
    setCounter((counter: number) => counter - 1);

  const handleReset: SetCounter = () => setCounter(defaultCounter);

  return [counter, handleIncrement, handleDecrement, handleReset];

  // Use return object instead of array to return data

  // return {
  //   counter,
  //   handleIncrement,
  //   handleDecrement,
  //   handleReset,
  // };
};
