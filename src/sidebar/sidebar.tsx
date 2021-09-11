/**@jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Routes, routeToIcon, routeToPageName } from "../routes/routes";
import { useStyleContext } from "../style_context/use_style_context";
import { sidebarElementStyle } from "./sidebar_element_style";
import { sidebarStyle } from "./sidebar_style";

export function Sidebar(): JSX.Element {
  const styleContext = useStyleContext();

  return (
    <div css={sidebarStyle(styleContext)}>
      <div className="sidebar-separator">
        <div className="page-name-wrapper">
          <img className="logo" src="./logo.png" alt="logo" />
          <div className="page-name-wrapper">
            <span className="page-name-normal">coin</span>
            <span className="page-name-bold">Desk</span>
          </div>
        </div>
      </div>
      <div className="sidebar-separator">
        {Object.values(Routes).map((route) => (
          <SidebarElement key={route} route={route} />
        ))}
      </div>
    </div>
  );
}

interface SidebarElementProps {
  route: Routes;
}

function SidebarElement(props: SidebarElementProps): JSX.Element {
  const styleContext = useStyleContext();
  const location = useLocation();
  const history = useHistory();

  const name = routeToPageName[props.route];
  const icon = routeToIcon[props.route];
  const onSidebarElementClick = React.useCallback(() => {
    history.push(props.route);
  }, [props, history]);
  return (
    <div
      css={sidebarElementStyle(
        styleContext,
        props.route === (location.pathname as Routes)
      )}
      onClick={onSidebarElementClick}
    >
      <span className={`sidebar-element-icon ${icon}`} />
      <span className="sidebar-element-name">{name}</span>
    </div>
  );
}
