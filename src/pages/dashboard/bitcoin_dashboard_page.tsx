/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { BitcoinCard } from "../../card/bitcoin_card";
import { useUpdatingBitcoinStoreData } from "../../store/bitcoin/use_updating_bitcoin_store_data";
import { useStyleContext } from "../../style_context/use_style_context";
import { WaitForDataFallbackPage } from "../wait_for_data_fallback_page";
import { bitcoindashboardPageSuspendingStyle } from "./bitcoin_dashboard_page_style";

export function BitcoinDashboardPage(): JSX.Element {
  return (
    <React.Suspense fallback={<WaitForDataFallbackPage />}>
      <BitcoinDashboardPageSuspending />
    </React.Suspense>
  );
}

const BitcoinDashboardPageSuspending = () => {
  const styleContext = useStyleContext();
  const [currentData] = useUpdatingBitcoinStoreData();
  return (
    <div css={bitcoindashboardPageSuspendingStyle(styleContext)}>
      <div className="content">
        {currentData.exchangeRates.map(({ symbol, buy, sell }) => (
          <BitcoinCard key={symbol} symbol={symbol} buy={buy} sell={sell} />
        ))}
      </div>
    </div>
  );
};
