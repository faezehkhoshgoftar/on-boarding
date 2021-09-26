import React, { useState, useEffect } from "react";
import { request } from "../../utils/api";
//Import components
import Type from "../type/Type";
import CryptoCurrencyList from "../crypto-currency-list/CryptoCurrencyList";
import CryptoCurrencies from "../crypto-currencies/CryptoCurrencies";

const Main = () => {
  const [currencies, setCurrencies] = useState([]);

  const [typeCurrency, setTypeCurrency] = useState("All");

  useEffect(() => {
    request.get().then((response) => setCurrencies(response.data.rates));
  }, []);

  const setType = (type) => {
    setTypeCurrency(type);
  };

  return (
    <main>
      <Type currencies={currencies} setType={setType} />
      <CryptoCurrencyList />
      <CryptoCurrencies currencies={currencies} typeCurrency={typeCurrency} />
    </main>
  );
};

export default Main;