import { css } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export const navbarStyle = (styleContext: StyleContext) => css`
  label: navbar;

  display: flex;

  width: 100%;
  height: ${styleContext.sizes.height.navbar};

  color: ${styleContext.shades.textDark};

  font-size: ${styleContext.sizes.font.subHeadline};

  .page-name {
    display: flex;
    align-items: center;
    padding-left: 24px;
  }
`;
