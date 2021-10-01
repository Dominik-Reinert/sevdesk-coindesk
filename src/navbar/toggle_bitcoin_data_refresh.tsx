/**@jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { useLanguageTranslation } from "../i18n";
import { useBitcoinRefresh } from "../store/bitcoin/use_bitcoin_refresh";
import { useStyleContext } from "../style_context/use_style_context";

export function ToggleBitcoinDataRefresh(): JSX.Element {
  const styleContext = useStyleContext();
  const [t] = useLanguageTranslation();
  const checkboxId: string = "toggle-refresh-checkbox";
  const [shouldRefresh, onCheckboxToggled] = useCheckboxBitcoinRefresh()
  return (
    <div>
      <label htmlFor={checkboxId}>{t("toggleRefresh")}</label>
      <input
        id={checkboxId}
        type="checkbox"
        checked={shouldRefresh}
        onChange={onCheckboxToggled}
      />
    </div>
  );
}

function useCheckboxBitcoinRefresh(): [shouldRefresh: boolean, onCheckboxToggled: () => void] {
    const [shouldRefresh, startRefresh, stopRefresh] = useBitcoinRefresh(500);
    const onCheckboxToggled = React.useCallback(() => {
      if (shouldRefresh) {
        stopRefresh();
      } else {
        startRefresh();
      }
    }, [shouldRefresh, startRefresh, stopRefresh]);
    return [shouldRefresh, onCheckboxToggled]
}