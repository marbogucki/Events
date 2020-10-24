import { useEffect } from 'react';

type UseDocumentTitle = (info: string) => void;

export const useDocumentTitle: UseDocumentTitle = (info: string) => {
  useEffect(() => {
    document.title = info;
  }, [info]);
};
