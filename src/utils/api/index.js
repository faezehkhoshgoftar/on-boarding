import axios from "axios";

class Request {
  constructor() {
    this.baseURL = "https://api.coingecko.com/api/v3/exchange_rates";
  }

  get() {
    return this.send({ method: "GET" });
  }

  send(info) {
    return new Promise(async (resolve, reject) => {
      const { method } = info;
      let response = null;

      if (method === "GET") {
        response = await axios.get(this.baseURL);
      }

      resolve(response);

      if (!response) {
        reject("");
      }
    });
  }
}
export const request = new Request();