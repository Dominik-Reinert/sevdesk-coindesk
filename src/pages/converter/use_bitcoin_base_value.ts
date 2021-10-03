import * as React from "react";
import { bitcoinStore } from "../../store/bitcoin/bitcoin_store";
import { useServerDataUpdate } from "../../store/use_server_data_updates";

export function useBitcoinBaseValue(): [
  currentBitcoinValue: number,
  onChange: (newValue: string, symbol: string) => void
] {
  const [currentData, setCurrentData] = React.useState(
    bitcoinStore.getCurrentDataAdapted()
  );
  const updateCurrentData = React.useCallback(
    () => setCurrentData(bitcoinStore.getCurrentDataAdapted()),
    [setCurrentData]
  );

  useServerDataUpdate(bitcoinStore.getCurrentData().details, updateCurrentData);
  const [currentBtcValue, setCurrentBtcValue] = React.useState(0);
  const onChange = React.useCallback(
    (newValue: string, symbol: string) => {
      const exchangeRate = currentData.exchangeRates.find(
        (rate) => rate.symbol === symbol
      );
      setCurrentBtcValue(Number(newValue) * (exchangeRate?.buy ?? 0));
    },
    [currentData, setCurrentBtcValue]
  );
  return [currentBtcValue, onChange];
}
