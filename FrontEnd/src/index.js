import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/app";
import reducers from "./reducers";
import Header from "./components/header";
import Footer from "./components/footer";
import MembersIndex from "./components/membersIndex";
import MemberRegister from "./components/memberRegister";
import MemberWelcome from "./components/memberWelcome";
import AboutUs from "./components/aboutUs";

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware, // neat middleware that logs actions
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/register" component={MemberRegister} />
            <Route path="/about" component={AboutUs} />
            <Route path="/welcome" component={MemberWelcome} />
            <Route path="/members" component={MembersIndex} />
            <Route path="/" component={App} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".content"),
);
