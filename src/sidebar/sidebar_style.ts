import { css, SerializedStyles } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export function sidebarStyle(styleContext: StyleContext): SerializedStyles {
  return css`
    label: sidebar;

    width: ${styleContext.sizes.width.sidebar};
    background-color: ${styleContext.shades.sidebarBackground};

    .sidebar-separator {
      border-top: 2px solid ${styleContext.shades.separation};
    }

    .logo {
      height: 34px;
      width: 34px;
      margin: 16px 10px 16px 16px;
    }

    .page-name {
      &-wrapper {
        display: flex;
        flex-direction: row;
        margin: auto 0;

        align-items: center;
        height: ${styleContext.sizes.height.navbar};
      }

      &-normal {
        font-weight: normal;
        font-size: ${styleContext.sizes.font.subHeadline};
        color: ${styleContext.shades.text};
      }

      &-bold {
        font-weight: bold;
        font-size: ${styleContext.sizes.font.subHeadline};
        color: ${styleContext.shades.text};
      }
    }
  `;
}
