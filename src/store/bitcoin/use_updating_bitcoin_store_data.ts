import * as React from "react";
import { useServerDataUpdate } from "../use_server_data_updates";
import { AdaptedBitcoinData, bitcoinStore } from "./bitcoin_store";

export function useUpdatingBitcoinStoreData(): [currentData: AdaptedBitcoinData] {
  const [currentData, setCurrentData] = React.useState(
    bitcoinStore.getCurrentDataAdapted()
  );
  const updateCurrentData = React.useCallback(
    () => setCurrentData(bitcoinStore.getCurrentDataAdapted()),
    [setCurrentData]
  );

  useServerDataUpdate(bitcoinStore.getCurrentData().details, updateCurrentData);
  return [currentData];
}
