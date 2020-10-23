import { EventItem } from 'components/Events/Event/Event.model';

export type EventParams = {
  id: string | undefined;
};

export type EventDetail = EventItem | null | undefined;
