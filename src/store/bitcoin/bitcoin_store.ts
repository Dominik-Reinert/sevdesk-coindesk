import { AbstractStore } from "../abstract_store";
import { ServerData } from "../server_data";

interface ExchangeRate {
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}

interface AdaptedBitcoinData {
  exchangeRates: ExchangeRate[];
}

class BitcoinStore extends AbstractStore<
  ServerData<Bitcoin.RootObject>,
  AdaptedBitcoinData
> {
  protected adaptData(
    data: ServerData<Bitcoin.RootObject>
  ): AdaptedBitcoinData {
    return Object.keys(data.get())?.reduce(
      (acc: AdaptedBitcoinData, key: string) => {
        acc.exchangeRates.push(
          data.get()[key as keyof Bitcoin.RootObject] as ExchangeRate
        );
        return acc;
      },
      { exchangeRates: [] }
    );
  }
}

export const bitcoinStore = new BitcoinStore(
  new ServerData<Bitcoin.RootObject>({
    fetch: () =>
      fetch("https://blockchain.info/ticker").then((result) =>
        result.json()
      ) as Promise<Bitcoin.RootObject>,
  })
);

// running the api into json 2 ts: http://json2ts.com/

declare namespace Bitcoin {
  export interface Data {
    last: number;
    buy: number;
    sell: number;
    symbol: string;
    "15m": number;
  }

  export interface RootObject {
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
