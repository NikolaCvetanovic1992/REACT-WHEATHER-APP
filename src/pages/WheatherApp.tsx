import React from "react";
import { useState, useEffect } from "react";
import TopButtons from "../components/TopButtons";
import classes from "../pages/WheatherApp.module.css";
import SearchInput from "../components/SearchInput";
import HourlyForecast from "../components/HourlyForecast";
import CurrentForecast from "../components/CurrentForecast";
import useAsync from "../hooks/useAsync";

const WheatherApp = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [forecast, setForecast] = useState<any>(null);
  const [hourlyForecast, setHourlyForecast] = useState<any>(null);
  const [city, setCity] = useState("Belgrade");
  const [geoLocation, setGeolocation] = useState({
    lat: "",
    lon: "",
  });

  const apiKey = process.env.REACT_APP_API_KEY;

  const wheatherApiURL = process.env.REACT_APP_WHEATHER_API_URL;

  const { data }: any = useAsync(
    `http://${wheatherApiURL}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  );

  useEffect(() => {
    if (!data?.message && data)
      setGeolocation({
        lat: data[0].lat,
        lon: data[0].lon,
      });
  }, [data]);

  /*useEffect(() => {
    try {
      fetch(
        `http://${wheatherApiURL}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGeolocation({
            lat: data[0].lat,
            lon: data[0].lon,
          });
        });
    } catch (error) {
      console.error(error);
    }
  }, [city]);*/

  useEffect(() => {
    if (!geoLocation.lat && !geoLocation.lon) return;
    setLoadingData(true);
    const fetchData = async () => {
      const response1 = await fetch(
        `https://${wheatherApiURL}/data/2.5/forecast?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${apiKey}&units=metric`
      );
      const json1 = await response1.json();

      const response2 = await fetch(
        `https://${wheatherApiURL}/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${apiKey}&units=metric`
      );
      const json2 = await response2.json();

      const [data1, data2]: any = await Promise.all([json1, json2]);

      setHourlyForecast(data1);
      setForecast(data2);
      setTimeout(() => {
        setLoadingData(false);
      }, 500);
    };

    fetchData();

    /*fetch(
      `https://${wheatherApiURL}/data/2.5/forecast?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setHourlyForecast(data);
        setTimeout(() => {
          setLoadingData(false);
        }, 1000);
      });*/
    /* fetch(
      `https://${wheatherApiURL}/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setForecast(data);
        setTimeout(() => {
          setLoadingData(false);
        }, 1000);
      });*/
  }, [geoLocation]);

  const cityHandler = (e: any) => {
    console.log(e.target.innerHTML);
    setCity(e.target.innerHTML);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target[0].value.length === 0) return;
    setCity(e.target[0].value);
  };

  const bgColor = forecast?.main?.temp > 10 ? "orange" : "lightblue";

  return (
    <div
      className={classes.main}
      style={{ backgroundColor: loadingData ? "grey" : bgColor }}
    >
      <TopButtons onClick={cityHandler} />
      <SearchInput handleSubmit={handleSubmit} />

      {!loadingData && (
        <div>
          <CurrentForecast data={forecast.main.temp} city={city} />
          <HourlyForecast data={hourlyForecast.list} />
          {/* <DailyForecast data={hourlyForecast} />*/}
        </div>
      )}

      {loadingData && !data?.message && <div>Loading...</div>}

      {data?.message && <div>{data.message}</div>}
    </div>
  );
};

export default WheatherApp;
