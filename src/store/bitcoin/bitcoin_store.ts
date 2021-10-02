import { AbstractStore } from "../abstract_store";
import { ServerData } from "../server_data";
import { Bitcoin } from "./server_interfaces";

interface ExchangeRate {
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}

interface BitcoinData {
  exchangeRates: ServerData<Bitcoin.ExchangeRatesRoot>;
}

interface AdaptedBitcoinData {
  exchangeRates: ExchangeRate[];
}

class BitcoinStore extends AbstractStore<BitcoinData, AdaptedBitcoinData> {
  protected adaptData(data: BitcoinData): AdaptedBitcoinData {
    return Object.keys(data.exchangeRates.get())?.reduce(
      (acc: AdaptedBitcoinData, key: string) => {
        acc.exchangeRates.push(
          data.exchangeRates.get()[
            key as keyof Bitcoin.ExchangeRatesRoot
          ] as ExchangeRate
        );
        return acc;
      },
      { exchangeRates: [] }
    );
  }
}

export const bitcoinStore = new BitcoinStore({
  exchangeRates: createExchangeRatesServerData(),
});

function createExchangeRatesServerData(): ServerData<Bitcoin.ExchangeRatesRoot> {
  return new ServerData<Bitcoin.ExchangeRatesRoot>({
    fetch: () =>
      fetch("https://blockchain.info/ticker").then((result) =>
        result.json()
      ) as Promise<Bitcoin.ExchangeRatesRoot>,
  });
}
