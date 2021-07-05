import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import NotFound from "./components/NotFound";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import Electronics from "./components/Categories/Electronics";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import SearchScreen from "./screens/SearchScreen";
import GraphScreen from "./screens/GraphScreen";
import "./App.css";
import Appliances from "./components/Categories/Appliances";
import Fashion from "./components/Categories/Fashion";
import Sports from "./components/Categories/Sports";
import Furnitures from "./components/Categories/Furnitures";
import KrentBasics from "./components/Categories/KrentBasics";
import HolidayDeals from "./components/Categories/HolidayDeals";
import Offers from "./components/Categories/Offers";
import TrendingNow from "./components/Categories/TrendigNow";
import GraphModel from "./screens/GraphModel";
import PriceGraphScreen from "./screens/PriceGraphScreen";
import PayMethGraphScreen from "./screens/PayMethGraphScreen";
import CategoryGraphScreen from "./screens/CategoryGraphScreen";
import RatingGraphScreen from "./screens/RatingGraphScreen";
import ReviewGraphScreen from "./screens/ReviewGraphScreen";
import UserGraphScreen from "./screens/UserGraphScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-2 mt-5 pt-5">
        <>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={SearchScreen}
              exact
            />
            <Route path="/search/:keyword" component={SearchScreen} exact />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/graphMode" component={GraphScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route path="/admin/graphModel" component={GraphModel} />
            <Route path="/admin/priceGraph" component={PriceGraphScreen} />
            <Route path="/admin/payMethGraph" component={PayMethGraphScreen} />
            <Route path="/admin/ratingGraph" component={RatingGraphScreen} />
            <Route path="/admin/reviewGraph" component={ReviewGraphScreen} />
            <Route path="/admin/userGraph" component={UserGraphScreen} />
            <Route
              path="/admin/categoryGraph"
              component={CategoryGraphScreen}
            />
            <Route path="/electronics" component={Electronics} />
            <Route path="/appliances" component={Appliances} />
            <Route path="/fashion" component={Fashion} />
            <Route path="/sports" component={Sports} />
            <Route path="/furnitures" component={Furnitures} />
            <Route path="/krent-basics" component={KrentBasics} />
            <Route path="/holiday-deals" component={HolidayDeals} />
            <Route path="/offers" component={Offers} />
            <Route path="/trending-now" component={TrendingNow} />

            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route component={NotFound} />
          </Switch>
        </>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
