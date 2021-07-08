import React, { useEffect } from "react";
import { Pie, defaults } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../actions/orderActions";

// import { useDispatch, useSelector } from "react-redux";
// defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const PayMethGraphScreen = ({ history }) => {
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
  var ans = [];
  orders.map((order) => ans.push(order.paymentMethod));
  // console.log(orders);
  const result = [0, 0];
  for (var i = 0; i < ans.length; i++) {
    if (ans[i] === "COD") {
      result[0] = result[0] + 1;
    } else {
      result[1]++;
    }
  }
  // console.log(result)

  return (
    <>
      <h1 className="graphh1">Payment Choice Graph </h1>
      <Pie
        data={{
          labels: ["COD", "PayPal"],
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
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
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
          maintainAspectRatio: false,
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
      />
    </>
  );
};

export default PayMethGraphScreen;
