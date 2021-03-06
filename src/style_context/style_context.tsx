import * as React from "react";

export interface StyleContext {
  shades: {
    text: string;
    textDark: string;
    selectedText: string;
    border: string;
    separation: string;
    boxShadow: string;
    sidebarBackground: string;
    sidebarBackgroundSelected: string;
    navbarBackground: string;
    contentBackground: string;
    cardBackground: string;
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
    height: {
      navbar: string;
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
    navbarBackground: "#FFFFFF",
    contentBackground: "#EFEFEF",
    sidebarBackground: "#646b74",
    sidebarBackgroundSelected: "#7c7f87",
    cardBackground: "#FFFFFF",
  },
  colors: {
    highlight: "#e4605b",
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
    height: {
      navbar: "80px",
    },
  },
  padding: {},
};

export const styleContext = React.createContext(defaultStyles);
