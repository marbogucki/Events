import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Config } from 'config';
import { EventItem } from 'components/Event/Event.model';
import { EventListStyled } from './EventList.style';
import { Event } from 'components/Event';

export const EventList = () => {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get(`${Config.URL_API}/events`);
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <EventListStyled>
      {events.map((event: EventItem) => (
        <Event key={event.id} event={event} />
      ))}
    </EventListStyled>
  );
};
