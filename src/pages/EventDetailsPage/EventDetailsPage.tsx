import React from 'react';
import { useParams } from 'react-router-dom';
import { Config } from 'config';
import { EventInfoWithLoadingAndError } from 'components/Events';
import {
  EventDetail,
  EventParams,
} from 'components/Events/EventInfo/EventInfo.model';
import { useApi } from 'hooks';

export const EventDetailsPage = () => {
  const { id }: EventParams = useParams();

  const { data: event, loading, error } = useApi<EventDetail>(
    `${Config.URL_API}/events/${id}`
  );

  return (
    <EventInfoWithLoadingAndError
      loading={loading}
      error={error}
      event={event}
    />
  );
};
