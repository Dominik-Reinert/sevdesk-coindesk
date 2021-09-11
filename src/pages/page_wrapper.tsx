/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { useStyleContext } from "../style_context/use_style_context";
import { pageWrapperStyle } from "./page_wrapper_style";

export function PageWrapper(props: React.PropsWithChildren<{}>): JSX.Element {
  const styleContext = useStyleContext();
  return <div css={pageWrapperStyle(styleContext)}>{props.children}</div>;
}
