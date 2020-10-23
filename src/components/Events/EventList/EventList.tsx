import React from 'react';
import { compose } from 'recompose';
import { Event } from 'components/Events/Event';
import { withError, withLoading } from 'hoc';
import { EventListStyled } from './EventList.style';
import { EventItem } from 'components/Events/Event/Event.model';

export const EventList = ({ events }: any) => {
  return (
    <EventListStyled>
      {events.map((event: EventItem) => (
        <Event key={event.id} event={event} />
      ))}
    </EventListStyled>
  );
};

export default compose<any, any>(withLoading, withError)(EventList);
