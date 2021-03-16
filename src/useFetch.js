import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    const requestData = async (url) => {
      const res = await fetch(url);
      const data = await res.text();
      setState({ data: data, loading: false });
    };

    requestData(url);
  }, [url, setState]);

  return state;
};
