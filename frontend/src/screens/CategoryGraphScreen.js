import React, { useEffect } from "react";
import { Pie, defaults } from "react-chartjs-2";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// defaults.global.tooltips.enabled = false
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, listProducts } from "../actions/productActions";
import { listOrders } from "../actions/orderActions";

// import { listOrders } from "../actions/orderActions";
defaults.global.legend.position = "bottom";
var res = [];

const CategoryGraphScreen = ({ orders }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  console.log(product);
  var ans = [];
  orders.map((order) => ans.push(order.orderItems[0].product));
  dispatch(listProductDetails(res[0]));
  console.log(ans);

  return (
    <>
      {" "}
      <h1>hii</h1>
      {/* <Pie
        data={{
          labels: [
            "Electronics",
            "Appliances",
            "Fashion",
            "Sports",
            "Furniture",
            "Holidays",
            "Basics",
            "fifty percent",
            "Recommendation",
            "Latest Prod",
          ],
          datasets: [
            {
              label: "price range",
              data: result,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: true,
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true,
          //         },
          //       },
          //     ],
          //   },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      /> */}
    </>
  );
};

export default CategoryGraphScreen;
