/**@jsx jsx */
import { jsx } from "@emotion/react";
import { useIntl } from "react-intl";
import { useLanguageTranslation } from "../i18n";
import { useStyleContext } from "../style_context/use_style_context";
import { bitcoinCardStyle } from "./bitcoin_card_style";

export interface BitcoinCardProps {
  symbol: string;
  buy: number;
  sell: number;
}

export function BitcoinCard(props: BitcoinCardProps): JSX.Element {
  const styleContext = useStyleContext();
  const [t] = useLanguageTranslation();
  const intl = useIntl();
  return (
    <div css={bitcoinCardStyle(styleContext)}>
      <div className="symbol">{props.symbol}</div>
      <div className="trading-wrapper">
        <div className="buy">
          <span className="label">{t("buy")}:</span>
          <span className="value">
            {props.buy.toLocaleString(intl.locale, {
              style: "currency",
              currency: props.symbol,
            })}
          </span>
        </div>
        <div className="sell">
          <span className="label">{t("sell")}:</span>
          <span className="value">
            {props.sell.toLocaleString(intl.locale, {
              style: "currency",
              currency: props.symbol,
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
