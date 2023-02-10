import classes from "./TopButtons.module.css";

const TopButtons = ({ onClick }: any) => {
  const cities = ["London", "Sidney", "Tokyo", "Toronto", "Paris"];

  return (
    <>
      <ul className={classes.list}>
        {cities.map((city: string) => (
          <li
            value={city}
            key={city}
            className={classes.listItem}
            onClick={onClick}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopButtons;
