import React from 'react';
import { EventProps } from './Event.model';
import { EventStyled, Title, Paragraph } from './Event.style';

export const Event = ({ event }: EventProps) => {
  const { title, description, price } = event;
  return (
    <EventStyled>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <p>
        Price: <em>{price} zł</em>
      </p>
    </EventStyled>
  );
};
