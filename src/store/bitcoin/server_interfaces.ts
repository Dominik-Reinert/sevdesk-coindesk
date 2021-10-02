// running the api into json 2 ts: http://json2ts.com/

export declare namespace Bitcoin {
  export interface Data {
    last: number;
    buy: number;
    sell: number;
    symbol: string;
    "15m": number;
  }

  export interface ExchangeRatesRoot {
    AUD: Bitcoin.Data;
    BRL: Bitcoin.Data;
    CAD: Bitcoin.Data;
    CHF: Bitcoin.Data;
    CLP: Bitcoin.Data;
    CNY: Bitcoin.Data;
    CZK: Bitcoin.Data;
    DKK: Bitcoin.Data;
    EUR: Bitcoin.Data;
    GBP: Bitcoin.Data;
    HKD: Bitcoin.Data;
    INR: Bitcoin.Data;
    ISK: Bitcoin.Data;
    JPY: Bitcoin.Data;
    KRW: Bitcoin.Data;
    NZD: Bitcoin.Data;
    PLN: Bitcoin.Data;
    RUB: Bitcoin.Data;
    SEK: Bitcoin.Data;
    SGD: Bitcoin.Data;
    THB: Bitcoin.Data;
    TWD: Bitcoin.Data;
    USD: Bitcoin.Data;
  }
}
