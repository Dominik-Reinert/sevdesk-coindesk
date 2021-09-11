import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Background } from "./background/background";
import { ClearStyles } from "./clear_styles/clear_styles";
import "./i18n";
import { Navbar } from "./navbar/navbar";
import { HomePage } from "./pages/home_page";
import { PageWrapper } from "./pages/page_wrapper";
import { Routes } from "./routes/routes";
import { Sidebar } from "./sidebar/sidebar";
import { defaultStyles, styleContext } from "./style_context/style_context";

function App() {
  return (
    <styleContext.Provider value={defaultStyles}>
      <ClearStyles>
        <Background>
          <BrowserRouter>
            <Sidebar />
            <PageWrapper>
              <Navbar />
              <Switch>
                <Route path={Routes.dashboard}>
                  <HomePage />
                </Route>
                <Route path="/">
                  <Redirect to={Routes.dashboard} />
                </Route>
              </Switch>
            </PageWrapper>
          </BrowserRouter>
        </Background>
      </ClearStyles>
    </styleContext.Provider>
  );
}

export default App;
