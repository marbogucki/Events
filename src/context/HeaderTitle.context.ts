import { createContext } from 'react';

export const HeaderTitleContext = createContext({
  title: '',
  setTitle: (title: string) => {
    console.log(title);
  },
});
