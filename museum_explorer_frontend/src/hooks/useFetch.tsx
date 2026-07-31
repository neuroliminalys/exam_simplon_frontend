import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setdata] = useState<T>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setError(null);
    setLoading(true);

    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          setLoading(false);
          throw new Error("HTML error code different from 2xx");
        }
      })
      .then((d) => {
        setLoading(false);
        setdata(d);
      })
      .catch((e) => setError(e));
  }, []);

  return { data, error, loading };
}
