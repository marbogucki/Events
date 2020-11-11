import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Config } from 'config';
import { setUrlParams } from 'helpers';
import { useInput } from 'hooks/useInput';
import { ConcertList } from 'components/ConcertList';
import { ConcertSearch } from 'components/ConcertSearch';
import { Concert } from 'components/ConcertList/ConcertList.model';

export const ConcertPage = () => {
  const [concerts, setConcerts] = useState<Concert[] | null>(null);
  const [category, handleCategory] = useInput('');
  const [city, handleCity] = useInput('');

  useEffect(() => {
    const fetchConcerts = async () => {
      const params: URLSearchParams = setUrlParams({ category, city });
      const { data } = await axios.get(`${Config.URL_API}/events`, {
        params,
      });

      setConcerts(data);
    };

    fetchConcerts();
  }, [category, city]);

  return (
    <Fragment>
      <ConcertSearch handleCategory={handleCategory} handleCity={handleCity} />
      <hr />
      <ConcertList concerts={concerts} />
    </Fragment>
  );
};
