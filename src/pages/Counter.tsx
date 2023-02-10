import { useContext } from "react";
import AuthContext from "../context/app-context";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Counter = () => {
  const ctx = useContext(AuthContext);

  let params = useSearchParams();

  let location = useLocation();

  console.log(location);

  let navigate = useNavigate();

  const data: any = {
    sponsors: [{ name: "ADDIDAS", img: "../addidas.jpg" }, { name: "NIKE" }],

    discounts: [
      { id: "asdasd", name: "ADDIDAssdS", img: "../" },
      { name: "NIsadsKE" },
    ],

    premium: [{ name: "ADDIDAsS", img: "../" }, { name: "NIKE" }],
  };

  const userData = [
    {
      name: "a",
      service: {
        header: "a",
        subtext: "a",
        img: "",
      },
      avatarImage: "",
      rank: "premium",
      sponsorStatus: true,
      discount: {
        active: true,
        percent: "20%",
      },
    },
  ];

  const premium = userData.filter((el) => el.rank === "premium");

  const discounts = userData.filter((el) => el.discount.active);

  console.log(discounts, premium);

  return (
    <div>
      <button onClick={() => navigate("/")}>HOME PAGE</button>
      <div>Counter: {ctx.counter}</div>
      <div>Second Counter: {ctx.secondCounter}</div>
      <button onClick={ctx.increment}>+</button>
      <button onClick={ctx.decrement}>-</button>
    </div>
  );
};

export default Counter;
