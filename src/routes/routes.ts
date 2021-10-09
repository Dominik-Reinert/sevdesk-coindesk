export enum Routes {
  dashboard = "/dashboard",
  details = "/details",
  chart = "/chart",
  converter = "/converter",
}

export const routeToIcon: { [key in Routes]: string } = {
  [Routes.dashboard]: "fas fa-tachometer-alt",
  [Routes.details]: "fas fa-info",
  [Routes.converter]: "fas fa-exchange-alt",
  [Routes.chart]: "fas fa-chart-line",
};

export const routeToPageName: { [key in Routes]: string } = {
  [Routes.dashboard]: "Bitcoin dashboard",
  [Routes.details]: "Details",
  [Routes.chart]: "Chart",
  [Routes.converter]: "Converter",
};
