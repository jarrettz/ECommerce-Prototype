import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductFormPage from './pages/ProductFormPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Checkout from './components/CheckoutComponents/Checkout';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/productform' component={ProductFormPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/products' component={ProductsPage} />
          <Route exact path='/cart' component={CartPage} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
