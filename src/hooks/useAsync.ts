import { useState, useEffect } from "react";

const useAsync = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runAsync = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  console.log(data);

  useEffect(() => {
    setLoading(true);

    runAsync(url);
  }, [url]);

  return { data, loading, error, runAsync };
};

export default useAsync;
