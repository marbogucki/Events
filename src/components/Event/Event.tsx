import React from 'react';
import { EventProps } from './Event.model';
import { EventLink, EventStyled, Title, Paragraph } from './Event.style';

export const Event = ({ event }: EventProps) => {
  const { id, title, description, price } = event;
  return (
    <EventStyled>
      <EventLink to={`/events/${id}`}>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <p>
          Price: <em>{price} zł</em>
        </p>
      </EventLink>
    </EventStyled>
  );
};
