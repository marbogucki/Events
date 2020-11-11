import React, { Fragment } from 'react';
import { SelectProps } from './Select.model';

export const Select = ({ label, options, handleSelect }: SelectProps) => {
  return (
    <Fragment>
      {label}:
      <select onChange={handleSelect}>
        <option value="">- select {label}</option>
        {options.map(({ label, value }: any) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </Fragment>
  );
};
