import useAsync from "./useAsync";
import { useState, useEffect } from "react";

const useWheather = (city: string, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geoLocation, setGeolocation] = useState({
    lat: "",
    lon: "",
  });

  const apiKey = process.env.REACT_APP_API_KEY;

  const wheatherApiURL = process.env.REACT_APP_WHEATHER_API_URL;

  const {
    data: cityData,
    loading: cityLoading,
    error: cityError,
  } = useAsync(
    `http://${wheatherApiURL}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  );

  useEffect(() => {
    setData(cityData);
    setLoading(cityLoading);
    setError(cityError);
  }, [cityData, cityLoading, cityError]);

  return { data, loading, error };
};

export default useWheather;
