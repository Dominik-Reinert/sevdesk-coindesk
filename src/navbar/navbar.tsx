/**@jsx jsx */
import { jsx } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { Routes, routeToPageName } from "../routes/routes";
import { useStyleContext } from "../style_context/use_style_context";
import { navbarStyle } from "./navbar_style";
import { ToggleBitcoinDataRefresh } from "./toggle_bitcoin_data_refresh";

export function Navbar(): JSX.Element {
  const styleContext = useStyleContext();
  const location = useLocation();

  return (
    <div css={navbarStyle(styleContext)}>
      <div className="page-name">
        {routeToPageName[location.pathname as Routes]}
      </div>
      <div className="refresh-toggle">
        <ToggleBitcoinDataRefresh />
      </div>
    </div>
  );
}
