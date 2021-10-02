import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";

enum SupportedLanguages {
  "en" = "en",
  "de" = "de",
}

interface LanguageResource {
  welcome: string;
  waitForDataInstruction: string;
  buy: string;
  sell: string;
  toggleRefresh: string;
  detailsCap: string;
  detailsTotal: string;
  detailsCount: string;
  detailsSent: string;
  detailsHash: string;
  detailsDifficulty: string;
}

interface DefaultNamespaceWrapper {
  translation: LanguageResource;
}

type LanguageResources = {
  [key in SupportedLanguages]: DefaultNamespaceWrapper;
};

const resources: LanguageResources = {
  de: {
    translation: {
      welcome: "Willkommen bei coinDesk!",
      waitForDataInstruction:
        "Bitte warten Sie, während die Daten geladen werden.",
      buy: "Kaufen",
      sell: "Verkaufen",
      toggleRefresh: "Alle 2000ms erneuern",
      detailsCap: "Marktkapitalisierung",
      detailsTotal: "Anzahl aller Bitcoins",
      detailsCount: "Anzahl der Transaktionen in den letzten 24h",
      detailsSent: "Anzahl gesendeter BTC  der letzten 24h",
      detailsHash: "Aktuelle Hashrate",
      detailsDifficulty: "Aktuelle Schwierigkeit",
    },
  },
  en: {
    translation: {
      welcome: "Welcome to coinDesk!",
      waitForDataInstruction: "Please wait while the data is being fetched.",
      buy: "Buy",
      sell: "Sell",
      toggleRefresh: "Refresh every 2000ms",
      detailsCap: "Market capitalization",
      detailsTotal: "Number of Bitcoins",
      detailsCount: "Number of Transactions during the last 24h",
      detailsSent: "Number of sent BTC during the last 24h",
      detailsHash: "Current hashrate",
      detailsDifficulty: "Current difficulty",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: resources as any,
  });

export function useLanguageTranslation(): [
  t: (key: keyof LanguageResource, param?: any) => string,
  i18n: typeof i18n,
  ready: boolean
] {
  return useTranslation();
}
