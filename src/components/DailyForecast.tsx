const DailyForecast = ({ data }: any) => {
  const currentDate = data.list[0].dt_txt.slice(0, 10);

  const dailyFilter = data.list.filter(
    (element: any) => element.dt_txt.slice(0, 10) !== currentDate
  );

  return (
    <div>
      {dailyFilter.map((el: any) => (
        <div key={Math.random()}>ss</div>
      ))}
    </div>
  );
};

export default DailyForecast;
