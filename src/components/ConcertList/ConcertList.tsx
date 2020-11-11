import React, { Fragment } from 'react';
import { ConcertListProps, Concert } from './ConcertList.model';

export const ConcertList = ({ concerts }: ConcertListProps) => {
  return (
    <Fragment>
      {concerts &&
        concerts.map((concert: Concert) => (
          <div key={concert.id}>
            <h3>{concert.title}</h3>
            <h5>{concert.category}</h5>
            <p>{concert.description}</p>
            <hr />
          </div>
        ))}
    </Fragment>
  );
};
