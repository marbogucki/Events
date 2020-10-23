import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Config } from 'config';
import { EventItem } from 'components/Events/Event/Event.model';
import EventList from 'components/Events/EventList/EventList';

export const Events = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(false);

  useEffect(() => {
    setLoading(true);
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`${Config.URL_API}/events`);
        setEvents(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchEvents();
  }, []);

  return <EventList loading={loading} error={error} events={events} />;
};
