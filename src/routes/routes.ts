export enum Routes {
  dashboard = "/dashboard",
  details = "/details",
}

export const routeToIcon: { [key in Routes]: string } = {
  [Routes.dashboard]: "fas fa-tachometer-alt",
  [Routes.details]: "fas fa-info",
};

export const routeToPageName: { [key in Routes]: string } = {
  [Routes.dashboard]: "Bitcoin dashboard",
  [Routes.details]: "Details",
};
