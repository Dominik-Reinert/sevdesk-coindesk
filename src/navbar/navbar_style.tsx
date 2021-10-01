import { css } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export const navbarStyle = (styleContext: StyleContext) => css`
  label: navbar;

  display: flex;

  width: 100%;
  height: ${styleContext.sizes.height.navbar};

  color: ${styleContext.shades.textDark};
  background-color: ${styleContext.shades.navbarBackground};

  justify-content: space-between;

  .page-name {
    font-size: ${styleContext.sizes.font.subHeadline};
    padding-left: 24px;
  }

  .refresh-toggle {
    font-size: ${styleContext.sizes.font.text};
    padding-right: 24px;
  }

  > * {
    display: flex;
    align-items: center;
  }
`;
