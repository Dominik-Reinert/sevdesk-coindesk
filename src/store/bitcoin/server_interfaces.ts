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

  export interface DetailsRoot {
    timestamp: number;
    market_price_usd: number;
    hash_rate: number;
    total_fees_btc: number;
    n_btc_mined: number;
    n_tx: number;
    n_blocks_mined: number;
    minutes_between_blocks: number;
    totalbc: number;
    n_blocks_total: number;
    estimated_transaction_volume_usd: number;
    blocks_size: number;
    miners_revenue_usd: number;
    nextretarget: number;
    difficulty: number;
    estimated_btc_sent: number;
    miners_revenue_btc: number;
    total_btc_sent: number;
    trade_volume_btc: number;
    trade_volume_usd: number;
  }
}

export declare namespace Chart {
  export interface Value {
    x: number;
    y: number;
  }

  export interface RootObject {
    status: string;
    name: string;
    unit: string;
    period: string;
    description: string;
    values: Value[];
  }
}
