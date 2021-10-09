import * as React from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Background } from "./background/background";
import { ClearStyles } from "./clear_styles/clear_styles";
import "./i18n";
import { Navbar } from "./navbar/navbar";
import { ChartPage } from "./pages/charts/chart_page";
import { ConverterPage } from "./pages/converter/converter_page";
import { BitcoinDashboardPage } from "./pages/dashboard/bitcoin_dashboard_page";
import { BitcoinDetailsPage } from "./pages/details/bitcoin_details_page";
import { PageWrapper } from "./pages/page_wrapper";
import { Routes } from "./routes/routes";
import { Sidebar } from "./sidebar/sidebar";
import { defaultStyles, styleContext } from "./style_context/style_context";

function App() {
  return (
    <styleContext.Provider value={defaultStyles}>
      <IntlProvider locale={navigator.language}>
        <ClearStyles>
          <Background>
            <BrowserRouter>
              <Sidebar />
              <PageWrapper>
                <Navbar />
                <Switch>
                  <Route path={Routes.chart}>
                    <ChartPage />
                  </Route>
                  <Route path={Routes.converter}>
                    <ConverterPage />
                  </Route>
                  <Route path={Routes.details}>
                    <BitcoinDetailsPage />
                  </Route>
                  <Route path={Routes.dashboard}>
                    <BitcoinDashboardPage />
                  </Route>
                  <Route path="/">
                    <Redirect to={Routes.dashboard} />
                  </Route>
                </Switch>
              </PageWrapper>
            </BrowserRouter>
          </Background>
        </ClearStyles>
      </IntlProvider>
    </styleContext.Provider>
  );
}

export default App;
