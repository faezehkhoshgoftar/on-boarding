import React, { useEffect, useState } from "react";
//Import component
import CryptoCurrency from "./CryptoCurrency";

const CryptoCurrencies = ({ currencies, typeCurrency }) => {
  const [showList, setShowList] = useState([]);
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    let crypto = [];
    for (const key in currencies) {
      if (Object.hasOwnProperty.call(currencies, key)) {
        const element = currencies[key];
        element["title"] = key;
        crypto.push(element);
      }
    }
    setCryptoList(crypto);
    setShowList(crypto);
  }, []);
  useEffect(() => {
    let list = [];
    switch (typeCurrency) {
      case "all":
        setShowList(cryptoList);
        break;
      case "commodity":
        list = cryptoList.filter((item) => {
          return item.type === "commodity";
        });
        setShowList(list);
        break;
      case "crypto":
        list = cryptoList.filter((item) => {
          return item.type === "crypto";
        });
        setShowList(list);
        break;
      case "fiat":
        list = cryptoList.filter((item) => {
          return item.type === "fiat";
        });
        setShowList(list);
        break;
    }
  }, [typeCurrency]);

  return (
    <div className="CryptoCurrencies">
      {showList.map((item, index) => {
        return <CryptoCurrency key={index} data={item} />;
      })}
    </div>
  );
};

export default CryptoCurrencies;
