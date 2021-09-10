import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import SignupPage from "./pages/signup";
import FeaturesPage from "./pages/features";
import PricingPage from "./pages/pricing";
import AboutPage from "./pages/about";
import SupportPage from "./pages/support";
import PageNotFound from "./pages/404";
import SubmitPage from "./pages/submit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/features" component={FeaturesPage} exact />
        <Route path="/pricing" component={PricingPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/support" component={SupportPage} exact />
        <Route path="/submit" component={SubmitPage} exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
