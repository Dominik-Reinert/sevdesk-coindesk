import * as React from "react";
import { AbstractStore } from "./abstract_store";

export function useUpdatingAdaptedData<D, AD>(
  store: AbstractStore<D, AD>
): [AD] {
  const [currentData, setCurrentData] = React.useState(
    store.getCurrentDataAdapted()
  );
  const updateCurrentData = React.useCallback(() => {
    setCurrentData(store.getCurrentDataAdapted());
  }, [setCurrentData, store]);
  React.useEffect(() => {
    store.registerOnUpdateCallback(updateCurrentData);
    return () => store.removeOnUpdateCallback(updateCurrentData);
  }, [store, updateCurrentData]);
  return [currentData];
}
