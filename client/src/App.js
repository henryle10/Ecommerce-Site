import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import NewProductsScreen from './screens/NewProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import AllProductsScreen from './screens/AllProductsScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { logout } from '../src/actions/userActions';


function App(props) {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <Link className="brand" to="/">ZEUS</Link>
          <div className="header-links">
            <Link to="/all/products">Products</Link>
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <>
                <Link to="/new/products">Add Product</Link>
                <Link to="/signin" onClick={handleLogout}>Logout ({userInfo.name})</Link>
              </>
            ) : (
                <Link to="/signin">Sign-In</Link>
              )}
          </div>
        </header>

        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/all/products" exact={true} component={AllProductsScreen} />
            <Route path="/new/products" component={NewProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" exact={true} component={AllProductsScreen} />
          </div>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
