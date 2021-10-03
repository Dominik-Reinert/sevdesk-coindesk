import * as React from "react";
import { useUpdatingBitcoinStoreData } from "../../store/bitcoin/use_updating_bitcoin_store_data";

export function useBitcoinBaseValue(): [
  currentBitcoinValue: number,
  onChange: (newValue: string, symbol: string) => void,
  onSetBtcValue: (newValue: string) => void
] {
  const [currentData] = useUpdatingBitcoinStoreData();
  const [currentBtcValue, setCurrentBtcValue] = React.useState(0);
  const onChange = React.useCallback(
    (newValue: string, symbol: string) => {
      const exchangeRate = currentData.exchangeRates.find(
        (rate) => rate.symbol === symbol
      );
      setCurrentBtcValue(Number(newValue) / (exchangeRate?.buy ?? 0));
    },
    [currentData, setCurrentBtcValue]
  );
  const onSetBtcValue = React.useCallback(
    (newValue: string) => {
      setCurrentBtcValue(Number(newValue));
    },
    [setCurrentBtcValue]
  );
  return [currentBtcValue, onChange, onSetBtcValue];
}
