/**@jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { useLanguageTranslation } from "../i18n";
import { useBitcoinRefresh } from "../store/bitcoin/use_bitcoin_refresh";

export function ToggleBitcoinDataRefresh(): JSX.Element {
  const [t] = useLanguageTranslation();
  const checkboxId: string = "toggle-refresh-checkbox";
  const [shouldRefresh, onCheckboxToggled] = useCheckboxBitcoinRefresh();
  return (
    <React.Fragment>
      <label htmlFor={checkboxId}>{t("toggleRefresh")}</label>
      <input
        id={checkboxId}
        type="checkbox"
        checked={shouldRefresh}
        onChange={onCheckboxToggled}
      />
    </React.Fragment>
  );
}

function useCheckboxBitcoinRefresh(): [
  shouldRefresh: boolean,
  onCheckboxToggled: () => void
] {
  const [shouldRefresh, startRefresh, stopRefresh] = useBitcoinRefresh(2000);
  const onCheckboxToggled = React.useCallback(() => {
    if (shouldRefresh) {
      stopRefresh();
    } else {
      startRefresh();
    }
  }, [shouldRefresh, startRefresh, stopRefresh]);
  return [shouldRefresh, onCheckboxToggled];
}
