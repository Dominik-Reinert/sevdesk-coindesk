/**@jsx jsx */
import { jsx } from "@emotion/react";
import { useStyleContext } from "../style_context/use_style_context";
import { sidebarStyle } from "./sidebar_style";

export function Sidebar(): JSX.Element {
  const styleContext = useStyleContext();

  return (
    <div css={sidebarStyle(styleContext)}>
      <div className="page-name-wrapper">
        <img className="logo" src="./logo.png" alt="logo" />
        <div className="page-name-wrapper">
          <span className="page-name-normal">coin</span>
          <span className="page-name-bold">Desk</span>
        </div>
      </div>
    </div>
  );
}
