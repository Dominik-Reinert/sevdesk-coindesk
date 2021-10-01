import * as React from "react";
import { bitcoinStore } from "./bitcoin_store";

export function useBitcoinRefresh(
  interval: number
): [startRefreshing: () => void, stopRefreshing: () => void] {
  const [shouldRefresh, ...refreshApi] = useBitcoinRefreshState();
  useBitcoinRefreshIntervalStartingFirstRender(interval, shouldRefresh);
  return refreshApi;
}

function useBitcoinRefreshIntervalStartingFirstRender(
  interval: number,
  shouldRefresh: boolean
): void {
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (shouldRefresh) {
        bitcoinStore.getCurrentData().refresh();
      }
    }, interval);

    return clearInterval(intervalId);
  }, []);
}

function useBitcoinRefreshState(): [
  shouldRefresh: boolean,
  startRefreshing: () => void,
  stopRefreshing: () => void
] {
  const [shouldRefresh, setShouldRefresh] = React.useState(true);

  const startRefreshing = React.useCallback(
    () => setShouldRefresh(true),
    [shouldRefresh]
  );
  const stopRefreshing = React.useCallback(
    () => setShouldRefresh(false),
    [shouldRefresh]
  );

  return [shouldRefresh, startRefreshing, stopRefreshing];
}
