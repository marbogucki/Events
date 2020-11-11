import { ChangeEvent } from 'react';

export type ConcertSearchProps = {
  handleCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleCity: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export type SearchSelectOption = {
  value: string;
  label: string;
};
