import { AbstractStore } from "../abstract_store";
import { ServerData } from "../server_data";
import { Bitcoin } from "./server_interfaces";

interface Details {
  marketCap: string;
  totalBc: number;
  dayTransactionCount: number;
  dayBtcSent: number;
  hashRate: number;
  getDifficulty: number;
}

interface ExchangeRate {
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}

interface BitcoinData {
  details: ServerData<Bitcoin.DetailsRoot>;
  exchangeRates: ServerData<Bitcoin.ExchangeRatesRoot>;
}

export interface AdaptedBitcoinData {
  details: Details;
  exchangeRates: ExchangeRate[];
}

class BitcoinStore extends AbstractStore<BitcoinData, AdaptedBitcoinData> {
  protected adaptData(data: BitcoinData): AdaptedBitcoinData {
    return {
      exchangeRates: this.adaptExchangeRates(data),
      details: this.adaptDetails(data),
    };
  }

  private adaptExchangeRates(data: BitcoinData): ExchangeRate[] {
    return Object.keys(data.exchangeRates.get())?.reduce(
      (acc: ExchangeRate[], key: string) => {
        acc.push(
          data.exchangeRates.get()[
            key as keyof Bitcoin.ExchangeRatesRoot
          ] as ExchangeRate
        );
        return acc;
      },
      []
    );
  }

  private adaptDetails(data: BitcoinData): Details {
    const details = data.details.get();
    return {
      dayBtcSent: details.estimated_btc_sent,
      dayTransactionCount: details.estimated_transaction_volume_usd,
      getDifficulty: details.difficulty,
      hashRate: details.hash_rate,
      marketCap: "?",
      totalBc: details.totalbc,
    };
  }
}

export const bitcoinStore = new BitcoinStore({
  details: createDetailsServerData(),
  exchangeRates: createExchangeRatesServerData(),
});

function createDetailsServerData(): ServerData<Bitcoin.DetailsRoot> {
  return new ServerData<Bitcoin.DetailsRoot>({
    fetch: () =>
      fetch("https://api.blockchain.info/stats").then((result) =>
        result.json()
      ) as Promise<Bitcoin.DetailsRoot>,
  });
}

function createExchangeRatesServerData(): ServerData<Bitcoin.ExchangeRatesRoot> {
  return new ServerData<Bitcoin.ExchangeRatesRoot>({
    fetch: () =>
      fetch("https://blockchain.info/ticker").then((result) =>
        result.json()
      ) as Promise<Bitcoin.ExchangeRatesRoot>,
  });
}
