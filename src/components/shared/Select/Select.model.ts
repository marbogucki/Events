import { ChangeEvent } from 'react';

export type SelectProps = {
  label: string;
  options: Option[];
  handleSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
};

type Option = {
  label: string;
  value: string;
};
