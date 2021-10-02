import { css, SerializedStyles } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export function defaultPageStyle(styleContext: StyleContext): SerializedStyles {
  return css`
    label: bitcoindashboard-page;
    height: calc(100% - ${styleContext.sizes.height.navbar});

    display: flex;

    margin: 80px auto;
    flex-direction: column;
    width: 70%;
    text-align: center;
  `;
}
