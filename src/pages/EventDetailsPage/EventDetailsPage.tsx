import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Config } from 'config';
import { EventInfoWithLoadingAndError } from 'components/Events';
import {
  EventDetail,
  EventParams,
} from 'components/Events/EventInfo/EventInfo.model';

export const EventDetailsPage = () => {
  const { id }: EventParams = useParams();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(false);

  useEffect(() => {
    setLoading(true);

    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(`${Config.URL_API}/events/${id}`);
        setEvent(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <EventInfoWithLoadingAndError
      loading={loading}
      error={error}
      event={event}
    />
  );
};
