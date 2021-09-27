import React from "react";
//Import icon
import { IoCheckmarkCircle } from "react-icons/io5";

const CryptoCurrency = ({ data }) => {
  return (
    <article className="CryptoCurrency">
      <section className="CryptoCurrency-section-left">
        <h3>{data.title}</h3>
        <p>USDT</p>
      </section>
      <section className="CryptoCurrency-section-right">
        <div>
          <p>Name</p>
          <h3>
            {data.name}
            <span className="check-mark-container">
              <IoCheckmarkCircle className="check-mark" />
            </span>
          </h3>
        </div>
        <div>
          <p>Value</p>
          <h3>{data.value}</h3>
        </div>
        <div>
          <p>Unit</p>
          <h3>{data.unit}</h3>
        </div>
        <div>
          <p>Type</p>
          <h3>{data.type}</h3>
        </div>
      </section>
    </article>
  );
};

export default CryptoCurrency;
