import React, { useState, useReducer } from "react";

const AuthContext = React.createContext({
  counter: 0,
  secondCounter: 0,
  increment: (e: any) => {},
  decrement: () => {},
});

const defaultCounterState = {
  counter: 0,
  secondCounter: 2,
};

const counterReducer = (state: any, action: any) => {
  if (action.type === "PLUS") {
    return {
      counter: state.counter + 1,
      secondCounter: state.secondCounter * 2,
    };
  }
  if (action.type === "MINUS") {
    return {
      counter: state.counter - 1,
      secondCounter: state.secondCounter / 2,
    };
  }
  return defaultCounterState;
};

export const AuthContextProvider = (props: any) => {
  const [counterState, dispatchCounterAction] = useReducer(
    counterReducer,
    defaultCounterState
  );
  const plusHandler = () => {
    dispatchCounterAction({ type: "PLUS" });
  };

  const minusHandler = () => {
    dispatchCounterAction({ type: "MINUS" });
  };

  return (
    <AuthContext.Provider
      value={{
        secondCounter: counterState.secondCounter,
        counter: counterState.counter,
        increment: plusHandler,
        decrement: minusHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

//Using use State hook

/* const [counter, setCounter] = useState(0);

  const plusHandler = (e: any) => {
    setCounter((prev) => prev + 1);
  };

  const minusHandler = () => {
    setCounter((prev) => prev - 1);
  };

  const counterContext = {
    counter: counter,
    increment: plusHandler,
    decrement: minusHandler,
  };*/
