import * as React from "react";
import { bitcoinStore } from "./bitcoin_store";

type BitcoinRefreshApi = [
  shouldRefresh: boolean,
  startRefreshing: () => void,
  stopRefreshing: () => void
];

export function useBitcoinRefresh(interval: number): BitcoinRefreshApi {
  const [shouldRefresh, ...refreshApi] = useBitcoinRefreshState();
  useBitcoinRefreshIntervalStartingFirstRender(interval, shouldRefresh);
  return [shouldRefresh, ...refreshApi];
}

function useBitcoinRefreshIntervalStartingFirstRender(
  interval: number,
  shouldRefresh: boolean
): void {
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (shouldRefresh) {
        bitcoinStore.getCurrentData().exchangeRates.refresh();
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, shouldRefresh]);
}

function useBitcoinRefreshState(): BitcoinRefreshApi {
  const [shouldRefresh, setShouldRefresh] = React.useState(false);

  const startRefreshing = React.useCallback(() => setShouldRefresh(true), []);
  const stopRefreshing = React.useCallback(() => setShouldRefresh(false), []);

  return [shouldRefresh, startRefreshing, stopRefreshing];
}
