/**@jsx jsx */
import { jsx } from "@emotion/react";
import { useLanguageTranslation } from "../i18n";
import { useStyleContext } from "../style_context/use_style_context";
import { defaultPageStyle } from "./default_page_style";

export function WaitForDataFallbackPage(): JSX.Element {
  const [t] = useLanguageTranslation();
  const styleContext = useStyleContext();
  return (
    <div css={defaultPageStyle(styleContext)}>
      <span className="welcome">{t("welcome")}</span>
      <span className="instruction">{t("waitForDataInstruction")}</span>
    </div>
  );
}
