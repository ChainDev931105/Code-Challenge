const axios = require('axios');

class Price {
  constructor() {
  }

  mid() {
    return (this.buy + this.sell) / 2 / 100; // divided by 100 because input prices are muliplied by 100
  }

  quote() {
    return this.pair.substr(3);
  }
}

class Datasource {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPrices() {
    let rsp = await axios.get(this.baseUrl);
    return rsp.data.data.prices.map(price => Object.assign(new Price(), price));
  }
}


const URL = "https://static.ngnrs.io/test/prices";

function test() {
  let ds = new Datasource(URL);
  ds.getPrices()
  .then(prices => {
    prices.forEach(price => {
        console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
    });
  }).catch(error => {
      console.err(error);
  });
}

test();
