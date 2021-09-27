import React, { useState, useEffect } from "react";
import { request } from "../utils/api";
//Import components
import Type from "./Type";
import CryptoCurrencyList from "./CryptoCurrencyList";
import CryptoCurrencies from "./CryptoCurrencies";

const Main = () => {
  const [currencies, setCurrencies] = useState(null);

  const [typeCurrency, setTypeCurrency] = useState("All");

  useEffect(() => {
    request.get().then((response) => {
      setCurrencies(response.data.rates);
    });
  }, []);

  const setType = (type) => {
    setTypeCurrency(type);
  };

  return (
    <div>
      {currencies && (
        <main>
          <Type currencies={currencies} setType={setType} />
          <CryptoCurrencyList />
          <CryptoCurrencies
            currencies={currencies}
            typeCurrency={typeCurrency}
          />
        </main>
      )}
    </div>
  );
};

export default Main;
