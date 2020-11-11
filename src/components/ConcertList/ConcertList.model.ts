export type ConcertListProps = {
  concerts: Concert[] | null;
};

export type Concert = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
};
