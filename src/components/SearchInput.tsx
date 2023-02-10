import { useState } from "react";

const SearchInput = ({ handleSubmit }: any) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchInput;
