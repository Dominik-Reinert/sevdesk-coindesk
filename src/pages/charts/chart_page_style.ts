import { css, SerializedStyles } from "@emotion/react";
import { StyleContext } from "../../style_context/style_context";

export function chartPageSuspendingStyle(
  styleContext: StyleContext
): SerializedStyles {
  return css`
    label: chart-page-suspending;
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
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      overflow-y: auto;

      .detail {
        display: flex;

        font-size: ${styleContext.sizes.font.text};

        &-label {
          flex: 0 0 400px;
        }
      }
    }
  `;
}
