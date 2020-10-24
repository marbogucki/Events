import { useState } from 'react';

type UseInput = (initialValue?: string) => [string, (event: any) => void];

export const useInput: UseInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
};
