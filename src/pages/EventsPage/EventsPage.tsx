import React from 'react';
import { Config } from 'config';
import { EventItem } from 'components/Events/Event/Event.model';
import { EventListWithLoadingAndError } from 'components/Events';
import { useApi } from 'hooks';

export const EventsPage = () => {
  const { data: events, loading, error } = useApi<EventItem>(
    `${Config.URL_API}/events`
  );

  return (
    <>
      <EventListWithLoadingAndError
        loading={loading}
        error={error}
        events={events}
      />
    </>
  );
};
