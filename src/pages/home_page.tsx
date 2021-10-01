/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { BitcoinCard } from "../card/bitcoin_card";
import { useLanguageTranslation } from "../i18n";
import { bitcoinStore } from "../store/bitcoin/bitcoin_store";
import { useStyleContext } from "../style_context/use_style_context";
import { homePageStyle, homePageSuspendingStyle } from "./home_page_style";

export function HomePage(): JSX.Element {
  return (
    <React.Suspense fallback={<HomePageFallback />}>
      <HomePageSuspending />
    </React.Suspense>
  );
}

function HomePageFallback(): JSX.Element {
  const [t] = useLanguageTranslation();
  const styleContext = useStyleContext();
  return (
    <div css={homePageStyle(styleContext)}>
      <span className="welcome">{t("welcome")}</span>
      <span className="instruction">{t("homeInstruction")}</span>
    </div>
  );
}

const HomePageSuspending = () => {
  const styleContext = useStyleContext();
  const data = bitcoinStore.getCurrentDataAdapted();
  return (
    <div css={homePageSuspendingStyle(styleContext)}>
      <div className="content">
        {data.exchangeRates.map(({ symbol, buy, sell }) => (
          <BitcoinCard key={symbol} symbol={symbol} buy={buy} sell={sell} />
        ))}
      </div>
    </div>
  );
};
