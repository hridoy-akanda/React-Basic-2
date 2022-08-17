import React from "react";
import { v4 as uuidv4 } from "uuid";

import Country from "./Country";
import style from "./countries.module.css";

const Countries = (props) => {
  return (
    <div className={style.countries}>
      {props.countries.map((country) => {
        const newCountry = { country, id: uuidv4() };
        return (
          <Country
            {...newCountry}
            key={newCountry.id}
            handleRemove={props.handleRemove}
          />
        );
      })}
    </div>
  );
};

export default Countries;
