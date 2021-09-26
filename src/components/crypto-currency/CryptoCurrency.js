import React from "react";
import "./CryptoCurrency.css";
//Import icon
import { IoCheckmarkCircle } from "react-icons/io5";

const CryptoCurrency = ({ item }) => {
  return (
    <article className="CryptoCurrency">
      <section className="CryptoCurrency-section-left">
        <h3>Tether</h3>
        <p>USDT</p>
      </section>
      <section className="CryptoCurrency-section-right">
        <div>
          <p>Name</p>
          <h3>
            {item.name}
            <span className="check-mark-container">
              <IoCheckmarkCircle className="check-mark" />
            </span>
          </h3>
        </div>
        <div>
          <p>Value</p>
          <h3>{item.value}</h3>
        </div>
        <div>
          <p>Unit</p>
          <h3>{item.unit}</h3>
        </div>
        <div>
          <p>Type</p>
          <h3>{item.type}</h3>
        </div>
      </section>
    </article>
  );
};

export default CryptoCurrency;