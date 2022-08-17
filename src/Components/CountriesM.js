import React, { useState, useEffect } from "react";

import Countries from "./Countries";
import "./countriesM.module.css";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";
const CountriesM = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
    // console.log(data);
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  const removeCountry = (name) => {
    let filter = filteredCountries.filter((country) => {
      return country.name.common !== name;
    });
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  return (
    <div>
      <section>
        <h1>Countries App</h1>
        <Search onSearch={handleSearch} />
      </section>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries countries={filteredCountries} handleRemove={removeCountry} />
      )}
    </div>
  );
};

export default CountriesM;
