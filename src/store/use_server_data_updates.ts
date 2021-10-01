import * as React from "react";
import { ServerData } from "./server_data";

export function useServerDataUpdate<D>(
  data: ServerData<D>,
  callback: () => void
): void {
  React.useEffect(() => {
    data.registerOnUpdateCallback(callback);
    return () => data.removeOnUpdateCallback(callback);
  }, [data, callback]);
}
