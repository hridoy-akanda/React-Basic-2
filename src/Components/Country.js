import React from "react";

import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, population, area, capital } = props.country;

  const onHandleRemove = (name) => {
    props.handleRemove(name);
  };

  return (
    <div className={style.country}>
      <img src={flags.png} alt={name.common} />
      <h3>Name: {name.common}</h3>
      <h3>Population: {population}</h3>
      <h3>Area: {area}</h3>
      <h3>Capital: {capital}</h3>
      <button onClick={() => onHandleRemove(name.common)}>Remove</button>
    </div>
  );
};

export default Country;
