import React from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { withLoading, withError } from 'hoc';

const EventInfo = ({ event }: any) => (
  <section>
    <h3>{event?.title}</h3>
    <p>{event?.description}</p>
    <Link to="/events">Back</Link>
  </section>
);

export default compose<any, any>(withLoading, withError)(EventInfo);
