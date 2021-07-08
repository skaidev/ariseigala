import { useEffect, useState } from "react";
export const useFetch = (url: string): JSX.Element => {
  const [state, setState] = useState(null);
  useEffect(() => {
    setState(null);
    fetch(url).then(({ url: uri }) => {
      setState(uri);
    });
  }, [url]);
  return state;
};
