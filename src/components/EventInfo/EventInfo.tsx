import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Config } from 'config';
import { Link, useParams } from 'react-router-dom';
import { EventParams, EventDetail } from './EventInfo.model';

export const EventInfo = () => {
  const { id }: EventParams = useParams();
  const [event, setEvent] = useState<EventDetail>();

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await axios.get(`${Config.URL_API}/events/${id}`);
      setEvent(data);
    };

    fetchEvent();
  }, [id]);

  return (
    <section>
      <h3>{event?.title}</h3>
      <p>{event?.description}</p>
      <Link to="/events">Back</Link>
    </section>
  );
};
