import React from "react";
import "./Type.css";

const Type = ({ currencies, setType }) => {
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;
  let types = Object.keys(currencies)
    .map(
      (item) =>
        currencies[item].type.charAt(0).toUpperCase() +
        currencies[item].type.slice(1)
    )
    .filter(uniqueItems);
  types.push("All");
  types.sort();

  const changeHandler = (e) => {
    setType(e.target.value.charAt(0).toLowerCase() + e.target.value.slice(1));
  };

  return (
    <div className="Type">
      <label htmlFor="types">Type</label>
      <select
        className="Type-select"
        onChange={changeHandler}
        id="types"
        name="types"
      >
        {types.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Type;