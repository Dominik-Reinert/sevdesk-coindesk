import { css, SerializedStyles } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export function bitcoinCardStyle(styleContext: StyleContext): SerializedStyles {
  return css`
    label: bitcoin-card;

    color: ${styleContext.shades.textDark};

    box-shadow: 2px 2px 6px 0px ${styleContext.shades.boxShadow};
    background-color: ${styleContext.shades.cardBackground};

    padding: 12px;
    margin: 18px;

    border-radius: 4px;

    width: 240px;
    height: 120px;

    .symbol {
      height: 40%;
      font-size: ${styleContext.sizes.font.subHeadline};
      display: flex;
      justify-content: center;
    }

    .trading-wrapper {
      height: 60%;
      text-align: center;
      display: flex;
      flex-direction: column-reverse;
    }

    .buy,
    .sell {
      display: flex;
      justify-content: space-between;
    }
  `;
}
