import React from 'react';
import { Select } from 'components/shared';
import { ConcertSearchProps, SearchSelectOption } from './ConcertSearch.model';

export const ConcertSearch = ({
  handleCategory,
  handleCity,
}: ConcertSearchProps) => {
  const categoryOptions: SearchSelectOption[] = [
    { label: 'Concert', value: 'concert' },
    { label: 'Event', value: 'event' },
  ];

  const cityOptions: SearchSelectOption[] = [
    { label: 'Gdansk', value: 'Gdansk' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'Katowice', value: 'Katowice' },
  ];

  return (
    <>
      <Select
        label="Category"
        options={categoryOptions}
        handleSelect={handleCategory}
      />

      <Select
        label="Category"
        options={cityOptions}
        handleSelect={handleCity}
      />
    </>
  );
};
