import { useState, useEffect } from 'react';

export type TApiResponse = {
  status: number;
  statusText: string;
  data: any;
  errors: any;
  loading: boolean;
};

export const useFetch = (url: string): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [errors, setErrors] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setErrors(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, errors, loading };
};

// // const data: TApiResponse = useFetch(
//   'https://pokeapi.co/api/v2/pokemon/pikachu'
// );
