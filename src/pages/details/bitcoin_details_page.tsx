/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { BitcoinCard } from "../../card/bitcoin_card";
import { useLanguageTranslation } from "../../i18n";
import { bitcoinStore } from "../../store/bitcoin/bitcoin_store";
import { useServerDataUpdate } from "../../store/use_server_data_updates";
import { useStyleContext } from "../../style_context/use_style_context";
import { WaitForDataFallbackPage } from "../wait_for_data_fallback_page";
import {
  bitcoinDetailsPageStyle,
  bitcoinDetailsPageSuspendingStyle,
} from "./bitcoin_details_page_style";

export function BitcoinDetailsPage(): JSX.Element {
  return (
    <React.Suspense fallback={<WaitForDataFallbackPage />}>
      <BitcoinDetailsPageSuspending />
    </React.Suspense>
  );
}

const BitcoinDetailsPageSuspending = () => {
  const styleContext = useStyleContext();
  const [currentData, setCurrentData] = React.useState(
    bitcoinStore.getCurrentDataAdapted()
  );
  const updateCurrentData = React.useCallback(
    () => setCurrentData(bitcoinStore.getCurrentDataAdapted()),
    [setCurrentData, bitcoinStore]
  );
  useServerDataUpdate(bitcoinStore.getCurrentData(), updateCurrentData);
  return (
    <div css={bitcoinDetailsPageSuspendingStyle(styleContext)}>
      <div className="content">
        {currentData.exchangeRates.map(({ symbol, buy, sell }) => (
          <BitcoinCard key={symbol} symbol={symbol} buy={buy} sell={sell} />
        ))}
      </div>
    </div>
  );
};
