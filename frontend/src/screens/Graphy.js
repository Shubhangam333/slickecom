import React from "react";
import { Pie, defaults, Bar } from "react-chartjs-2";
import CategoryGraphScreen from "./CategoryGraphScreen";
import GraphScreen from "./GraphScreen";
import PayMethGraphScreen from "./PayMethGraphScreen";
import PriceGraphScreen from "./PriceGraphScreen";

// defaults.global.tooltips.enabled = false
defaults.global.legend.position = "bottom";

const GraphModel = ({ orders }) => {
  return (
    <>
      <GraphScreen orders={orders} />
      <PriceGraphScreen orders={orders} />
      <PayMethGraphScreen orders={orders} />
      <CategoryGraphScreen orders={orders} />
    </>
  );
};

export default GraphModel;
