import React from "react";
import "./CryptoCurrencies.css";
//Import component
import CryptoCurrency from "../crypto-currency/CryptoCurrency";

const CryptoCurrencies = ({ currencies, typeCurrency }) => {
  let cryptoCurrencies = Object.keys(currencies).map(
    (item) => currencies[item]
  );

  if (typeCurrency === "All") {
    return (
      <div className="CryptoCurrencies">
        {cryptoCurrencies.map((item, index) => (
          <CryptoCurrency item={item} key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="CryptoCurrencies">
      {cryptoCurrencies
        .filter(({ type }) => typeCurrency === type || typeCurrency === "all")
        .map((item, index) => (
          <CryptoCurrency item={item} key={index} />
        ))}
    </div>
  );
};

export default CryptoCurrencies;