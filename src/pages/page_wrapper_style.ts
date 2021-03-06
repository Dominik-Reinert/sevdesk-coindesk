import { css, SerializedStyles } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export function pageWrapperStyle(styleContext: StyleContext): SerializedStyles {
  return css`
    label: page-wrapper;

    display: flex;
    flex-direction: column;

    width: ${styleContext.sizes.width.content};
    height: 100%;

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
