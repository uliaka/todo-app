import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './redux/store.js';
import { Provider } from 'react-redux';
import ItemDetailsPage from '../src/pages/ItemDetailsPage.js';
import TodoItemsPage from '../src/pages/TodoItemsPage.js';

function RouterComponent() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoItemsPage} />
          <Route exact path="/item/:id" component={ItemDetailsPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterComponent />, rootElement);
serviceWorker.unregister();
