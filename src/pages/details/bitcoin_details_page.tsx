/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { useLanguageTranslation } from "../../i18n";
import { bitcoinStore } from "../../store/bitcoin/bitcoin_store";
import { useServerDataUpdate } from "../../store/use_server_data_updates";
import { useStyleContext } from "../../style_context/use_style_context";
import { WaitForDataFallbackPage } from "../wait_for_data_fallback_page";
import { bitcoinDetailsPageSuspendingStyle } from "./bitcoin_details_page_style";

export function BitcoinDetailsPage(): JSX.Element {
  return (
    <React.Suspense fallback={<WaitForDataFallbackPage />}>
      <BitcoinDetailsPageSuspending />
    </React.Suspense>
  );
}

const BitcoinDetailsPageSuspending = () => {
  const styleContext = useStyleContext();
  const [t] = useLanguageTranslation();
  const [currentData, setCurrentData] = React.useState(
    bitcoinStore.getCurrentDataAdapted()
  );
  const updateCurrentData = React.useCallback(
    () => setCurrentData(bitcoinStore.getCurrentDataAdapted()),
    [setCurrentData]
  );
  useServerDataUpdate(bitcoinStore.getCurrentData().details, updateCurrentData);
  return (
    <div css={bitcoinDetailsPageSuspendingStyle(styleContext)}>
      <div className="content">
        <DetailView
          label={t("detailsCap")}
          value={currentData.details.marketCap.toString()}
        />
        <DetailView
          label={t("detailsTotal")}
          value={currentData.details.totalBc.toString()}
        />
        <DetailView
          label={t("detailsCount")}
          value={currentData.details.dayTransactionCount.toString()}
        />
        <DetailView
          label={t("detailsSent")}
          value={currentData.details.dayBtcSent.toString()}
        />
        <DetailView
          label={t("detailsHash")}
          value={currentData.details.hashRate.toString()}
        />
        <DetailView
          label={t("detailsDifficulty")}
          value={currentData.details.getDifficulty.toString()}
        />
      </div>
    </div>
  );
};

function DetailView(props: { label: string; value: string }): JSX.Element {
  const { label, value } = props;
  return (
    <div className="detail">
      <span className="detail-label">{label}:</span>
      <span className="detail-value">{value}</span>
    </div>
  );
}
