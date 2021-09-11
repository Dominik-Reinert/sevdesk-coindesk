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
    background-color: ${selected
      ? styleContext.shades.sidebarBackgroundSelected
      : "inherit"};
    padding: 16px;

    .sidebar-element-icon {
      font-family: "Font Awesome 5 Free";
    }
  `;
}
