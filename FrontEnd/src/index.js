import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/app";
import reducers from "./reducers";
import Footer from "./components/footer";
import MembersIndex from "./components/membersIndex";


const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware, // neat middleware that logs actions
)(createStore);

class Goodbye extends React.Component {
  render() {
    return (
      <div>Goodbye! not yet implemented</div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" component={MembersIndex} />
          <Route path="/goodbye" component={Goodbye} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".content"),
);
