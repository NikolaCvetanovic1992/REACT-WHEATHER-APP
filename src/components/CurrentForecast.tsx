type CurrentForecastType = {
  data: number;
  city: string;
};

const CurrentForecast = ({ data, city }: CurrentForecastType) => {
  const temperature = data;

  const date: string = new Date().toLocaleDateString();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "100px",
          marginBottom: "20px",
        }}
      >
        <div>City: {city}</div>
        <div>Current Temperature: {temperature}&#8451;</div>
        <div>Date: {date}</div>
      </div>
    </>
  );
};

export default CurrentForecast;
