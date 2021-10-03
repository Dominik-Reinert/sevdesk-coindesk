export enum Routes {
  dashboard = "/dashboard",
  details = "/details",
  converter = "/converter",
}

export const routeToIcon: { [key in Routes]: string } = {
  [Routes.dashboard]: "fas fa-tachometer-alt",
  [Routes.details]: "fas fa-info",
  [Routes.converter]: 'fas fa-exchange-alt'
};

export const routeToPageName: { [key in Routes]: string } = {
  [Routes.dashboard]: "Bitcoin dashboard",
  [Routes.details]: "Details",
  [Routes.converter]: "Converter",
};
