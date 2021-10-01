export enum Routes {
  dashboard = "/dashboard",
}

export const routeToIcon: { [key in Routes]: string } = {
  [Routes.dashboard]: "fas fa-tacbitcoindashboardter-alt",
};

export const routeToPageName: { [key in Routes]: string } = {
  [Routes.dashboard]: "Bitcoin dashboard",
};
