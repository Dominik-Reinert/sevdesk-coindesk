import { css, SerializedStyles } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export function sidebarElementStyle(
  styleContext: StyleContext,
  selected: boolean
): SerializedStyles {
  return css`
    label: sidebar-element;

    cursor: pointer;

    color: ${styleContext.shades.text};

    ${selected
      ? `
        background-color: ${styleContext.shades.sidebarBackgroundSelected};
        padding: 16px 24px 16px 16px;
        border-left: 8px solid ${styleContext.colors.highlight};  
       `
      : `
      background-color: inherit;
      padding: 16px 24px;
    `}

    .sidebar-element-icon {
      font-family: "Font Awesome 5 Free";
    }

    .sidebar-element-name {
      padding-left: 12px;
    }
  `;
}
