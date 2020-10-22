import React from 'react';
import events from '../../database.json';
import { Event } from '../Event';
import { EventListStyled } from './EventList.style';
import { EventItem } from '../Event/Event.model';

export const EventList = () => (
  <EventListStyled>
    {events.map((event: EventItem) => (
      <Event key={event.id} event={event} />
    ))}
  </EventListStyled>
);
