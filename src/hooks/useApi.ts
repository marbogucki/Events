import { useEffect, useState } from 'react';
import axios from 'axios';

export const useApi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchEvents();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
