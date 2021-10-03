/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { bitcoinStore } from "../../store/bitcoin/bitcoin_store";
import { useStyleContext } from "../../style_context/use_style_context";
import { WaitForDataFallbackPage } from "../wait_for_data_fallback_page";
import { converterPageSuspendingStyle } from "./converter_page_style";
import { useBitcoinBaseValue } from "./use_bitcoin_base_value";

export function ConverterPage(): JSX.Element {
  return (
    <React.Suspense fallback={<WaitForDataFallbackPage />}>
      <ConverterPageSuspending />
    </React.Suspense>
  );
}

const ConverterPageSuspending = () => {
  const styleContext = useStyleContext();
  const [currentBtcValue, onChange, onSetBtcValue] = useBitcoinBaseValue();
  const symbolsToRender = ["EUR", "USD", "AUD", "NZD", "GBP"];
  return (
    <div css={converterPageSuspendingStyle(styleContext)}>
      <div className="content">
        <BitcoinRate btcValue={currentBtcValue} onChange={onSetBtcValue} />
        {symbolsToRender.map((toRender) => (
          <ExchangeRate
            key={toRender}
            symbol={toRender}
            btcValue={currentBtcValue}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

function BitcoinRate(props: {
  btcValue: number;
  onChange: (newValue: string) => void;
}): JSX.Element {
  const { btcValue, onChange } = props;
  const inputId = "exchange-rate-btc";
  const handleChange = React.useCallback(
    (evt) => onChange(evt.target.value),
    [onChange]
  );
  return (
    <div className="exchange-rate">
      <label htmlFor={inputId} className="exchange-rate-symbol">
        BTC:
      </label>
      <input
        id={inputId}
        type="number"
        value={btcValue}
        onChange={handleChange}
      />
    </div>
  );
}

function ExchangeRate(props: {
  symbol: string;
  btcValue: number;
  onChange: (newValue: string, symbol: string) => void;
}): JSX.Element {
  const { symbol, btcValue, onChange } = props;
  const inputId = `exchange-rate-${symbol}`;
  const exchangeRates = bitcoinStore.getCurrentDataAdapted().exchangeRates;
  const exchangeRate = exchangeRates.find((rate) => rate.symbol === symbol);
  if (!exchangeRate) {
    throw new Error(`Could not find exchange rate for symbol ${symbol}!`);
  }
  const handleChange = React.useCallback(
    (evt) => onChange(evt.target.value, symbol),
    [onChange, symbol]
  );
  return (
    <div className="exchange-rate">
      <label htmlFor={inputId} className="exchange-rate-symbol">
        {symbol}:
      </label>
      <input
        id={inputId}
        type="number"
        value={btcValue * exchangeRate.buy}
        onChange={handleChange}
      />
    </div>
  );
}
