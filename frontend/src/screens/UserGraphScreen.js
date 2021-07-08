import React, { useEffect } from "react";
import { Pie, defaults } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../actions/orderActions";
import "../App.css";
// import { useDispatch, useSelector } from "react-redux";
// defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const UserGraphScreen = ({ history }) => {
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
  orders.map((order) => ans.push(order.user.name));
  console.log(ans);
  var arr = [];
  arr = ans.filter(function (item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });
  var result = [];
  var counts = [];
  ans.forEach(function (_item) {
    if (typeof counts[_item] === "undefined") counts[_item] = 1;
    else counts[_item]++;
  });
  for (var i in counts) result.push(counts[i]);
  console.log(result);
  console.log(arr);

  const map1 = new Map();

  for (var i = 0; i < arr.length; i++) {
    map1.set(arr[i], result[i]);
  }
  const mapSort1 = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));

  console.log(mapSort1);

  let label = Array.from(mapSort1.keys());
  console.log(label);
  let d = Array.from(mapSort1.values());
  console.log(d);

  return (
    <>
      <h1 className="graphh1">User Graph</h1>
      <Pie
        data={{
          labels: label.slice(0, 3),
          datasets: [
            {
              label: "price range",
              data: d.slice(0, 3),
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

export default UserGraphScreen;
