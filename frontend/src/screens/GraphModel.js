import React, { useEffect } from "react";
import { defaults } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../actions/orderActions";
import CategoryGraphScreen from "./CategoryGraphScreen";

import GraphScreen from "./GraphScreen";

// defaults.global.tooltips.enabled = false
defaults.global.legend.position = "bottom";

const GraphModel = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { orders } = orderList;
  // console.log(orders);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, userInfo, history]);
  return (
    <>
      <GraphScreen orders={orders} />
      {/* <PriceGraphScreen orders={orders} />
      <PayMethGraphScreen orders={orders} /> */}
    </>
  );
};

export default GraphModel;
