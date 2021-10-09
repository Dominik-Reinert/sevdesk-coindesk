/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { Line } from "react-chartjs-2";
import { bitcoinStore } from "../../store/bitcoin/bitcoin_store";
import { useStyleContext } from "../../style_context/use_style_context";
import { WaitForDataFallbackPage } from "../wait_for_data_fallback_page";
import { chartPageSuspendingStyle } from "./chart_page_style";

export function ChartPage(): JSX.Element {
  return (
    <React.Suspense fallback={<WaitForDataFallbackPage />}>
      <ChartPageSuspending />
    </React.Suspense>
  );
}

const ChartPageSuspending = () => {
  const styleContext = useStyleContext();
  const { name, description, unit, values } =
    bitcoinStore.getCurrentDataAdapted().chart;
  return (
    <div css={chartPageSuspendingStyle(styleContext)}>
      <Line
        id="first-line"
        data={{
          labels: values.map((value) =>
            new Date(value.x * 1000).toLocaleDateString()
          ),
          datasets: [
            {
              label: `Sample data taken from the charts api on bitcoin.info. Note: Could not fetch latest data as it does not allow doing so (CORS issues in response header)`,
              data: values.map((value) => value.y),
              fill: false,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        }}
        height={200}
        width={400}
      />
    </div>
  );
};
