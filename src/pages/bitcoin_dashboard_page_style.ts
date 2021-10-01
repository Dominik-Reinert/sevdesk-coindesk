import { css, SerializedStyles } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export function bitcoindashboardPageStyle(styleContext: StyleContext): SerializedStyles {
  return css`
    label: bitcoindashboard-page;
    height: calc(100% - ${styleContext.sizes.height.navbar});

    display: flex;

    margin: 80px auto;
    flex-direction: column;
    width: 70%;
    text-align: center;

    .welcome {
      font-size: ${styleContext.sizes.font.welcome};
      color: ${styleContext.shades.text};
    }

    .instruction {
      font-size: ${styleContext.sizes.font.headline};
      color: ${styleContext.shades.text};
    }
  `;
}

export function bitcoindashboardPageSuspendingStyle(
  styleContext: StyleContext
): SerializedStyles {
  return css`
    label: bitcoindashboard-page-suspending;
    height: calc(100% - ${styleContext.sizes.height.navbar});
    background-color: ${styleContext.shades.contentBackground};

    .header {
      display: flex;
      width: 70%;
      margin: auto;
      align-content: center;
      justify-content: space-around;
      padding: 16px;
      text-align: left;

      > * {
        flex: 1 0 0;
        color: ${styleContext.shades.text};
        font-size: ${styleContext.sizes.font.text};
        text-align: center;
      }

      .name {
        text-align: left;
      }
    }

    .content {
      overflow-y: auto;
      display: flex;
      flex-wrap: wrap;
      overflow-y: auto;
      height: 100%;
    }
  `;
}
