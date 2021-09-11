import * as React from "react";

export interface StyleContext {
  shades: {
    text: string;
    textDark: string;
    selectedText: string;
    border: string;
    separation: string;
    boxShadow: string;
    cardBackground: string;
    sidebarBackground: string;
    sidebarBackgroundSelected: string;
  };
  colors: {
    highlight: string;
    sevDeskDark: string;
    sevDeskLight: string;
  };
  sizes: {
    font: {
      welcome: string;
      headline: string;
      subHeadline: string;
      text: string;
      smallText: string;
    };
    width: {
      content: string;
      sidebar: string;
    };
  };
  padding: {};
}

export const defaultStyles: StyleContext = {
  shades: {
    text: "#e7e7ea",
    textDark: "#676767",
    selectedText: "#FFFFFF",
    border: "#808080",
    separation: "#a9aeb1",
    boxShadow: "#C0C0C0",
    cardBackground: "#FAFAFA",
    sidebarBackground: "#646b74",
    sidebarBackgroundSelected: "#7c7f87",
  },
  colors: {
    highlight: "##f35750",
    sevDeskDark: "#022a4a",
    sevDeskLight: "#0a84dd",
  },
  sizes: {
    font: {
      welcome: "60px",
      headline: "40px",
      subHeadline: "28px",
      text: "20px",
      smallText: "16px",
    },
    width: {
      content: "80%",
      sidebar: "20%",
    },
  },
  padding: {},
};

export const styleContext = React.createContext(defaultStyles);
