import React from "react";
import classes from "./HourlyForecast.module.css";
import { UilCloud } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { UilCloudRain } from "@iconscout/react-unicons";

const HourlyForecast: React.FC<{ data: any }> = ({ data }) => {
  const currentDate = data[0].dt_txt.slice(0, 10);

  const dailyFilter = data.filter(
    (element: any) => element.dt_txt.slice(0, 10) === currentDate
  );

  function renderIcon(desc: string) {
    if (desc === "light rain") return <UilCloudRain />;
    if (desc === "clear sky") return <UilSun />;
    if (desc === "scattered clouds" || "few clouds" || "broken clouds")
      return <UilCloud />;
    else return "no picture";
  }

  return (
    <div className={classes.container}>
      {dailyFilter.map((el: any) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
          key={Math.random()}
        >
          <div>{el.dt_txt.slice(10, 16)} h</div>
          <div>{el.main.temp}&#8451;</div>
          <div>{renderIcon(el.weather[0].description)}</div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
