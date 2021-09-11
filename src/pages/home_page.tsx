/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { useLanguageTranslation } from "../i18n";
import { useStyleContext } from "../style_context/use_style_context";
import { homePageStyle, homePageSuspendingStyle } from "./home_page_style";

export function HomePage(): JSX.Element {
  return (
    <React.Suspense fallback={<HomePageFallback />}>
      <HomePageSuspending />
    </React.Suspense>
  );
}

function HomePageFallback(): JSX.Element {
  const [t] = useLanguageTranslation();
  const styleContext = useStyleContext();
  return (
    <div css={homePageStyle(styleContext)}>
      <span className="welcome">{t("welcome")}</span>
      <span className="instruction">{t("homeInstruction")}</span>
    </div>
  );
}

const HomePageSuspending = () => {
    const styleContext = useStyleContext();
    const [t] = useLanguageTranslation();
    return (
      <div css={homePageSuspendingStyle(styleContext)}>
        <div className="header">Bitcoin dashboard</div>
        <div className="content"></div>
      </div>
    );
  };
