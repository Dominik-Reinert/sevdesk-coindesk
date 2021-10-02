/**@jsx jsx */
import { jsx } from "@emotion/react";
import { useLanguageTranslation } from "../i18n";
import { useStyleContext } from "../style_context/use_style_context";
import { bitcoinDetailsPageStyle } from "./details/bitcoin_details_page_style";


export function WaitForDataFallbackPage(): JSX.Element {
  const [t] = useLanguageTranslation();
  const styleContext = useStyleContext();
  return (
    <div css={bitcoinDetailsPageStyle(styleContext)}>
      <span className="welcome">{t("welcome")}</span>
      <span className="instruction">{t("waitForDataInstruction")}</span>
    </div>
  );
}
