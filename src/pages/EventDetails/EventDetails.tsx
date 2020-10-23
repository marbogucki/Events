import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventItem } from 'components/Event/Event.model';
import events from '../../database.json';

type EventParams = {
  id: string | undefined;
};

type EventId = string | undefined;

type EventDetail = EventItem | null | undefined;

export const EventDetails = () => {
  const { id }: EventParams = useParams();
  const [event, setEvent] = useState<EventDetail>();

  useEffect(() => {
    const fetchEventById: (id: EventId) => EventDetail = (id: EventId) => {
      if (!id) {
        return null;
      }

      return events.find((event: EventItem) => (event.id = +id));
    };

    setEvent(fetchEventById(id));
  }, [id]);

  return (
    <section>
      <h3>{event?.title}</h3>
      <p>{event?.description}</p>
    </section>
  );
};
