/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { BitcoinCard } from "../card/bitcoin_card";
import { useLanguageTranslation } from "../i18n";
import { bitcoinStore } from "../store/bitcoin/bitcoin_store";
import { useStyleContext } from "../style_context/use_style_context";
import { bitcoindashboardPageStyle, bitcoindashboardPageSuspendingStyle } from "./bitcoin_dashboard_page_style";

export function BitcoinDashboardPage(): JSX.Element {
  return (
    <React.Suspense fallback={<BitcoinDashboardPageFallback />}>
      <BitcoinDashboardPageSuspending />
    </React.Suspense>
  );
}

function BitcoinDashboardPageFallback(): JSX.Element {
  const [t] = useLanguageTranslation();
  const styleContext = useStyleContext();
  return (
    <div css={bitcoindashboardPageStyle(styleContext)}>
      <span className="welcome">{t("welcome")}</span>
      <span className="instruction">{t("bitcoindashboardInstruction")}</span>
    </div>
  );
}

const BitcoinDashboardPageSuspending = () => {
  const styleContext = useStyleContext();
  const data = bitcoinStore.getCurrentDataAdapted();
  return (
    <div css={bitcoindashboardPageSuspendingStyle(styleContext)}>
      <div className="content">
        {data.exchangeRates.map(({ symbol, buy, sell }) => (
          <BitcoinCard key={symbol} symbol={symbol} buy={buy} sell={sell} />
        ))}
      </div>
    </div>
  );
};
