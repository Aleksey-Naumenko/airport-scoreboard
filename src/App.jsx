import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchField from "./flights/components/SearchField";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <Router>
          <Header />

          <Switch>
            <Route path="/:direction?/:fltNo?">
              <SearchField />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
