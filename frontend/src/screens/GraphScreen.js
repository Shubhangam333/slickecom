import React from "react";
import { Pie, defaults } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false
defaults.global.legend.position = "bottom";

const GraphScreen = ({ orders }) => {
  var result = [];
  const ans = [];
  const res = [];
  var arr = new Array();
  orders.map((order) => ans.push(order.orderItems[0].name));
  arr = ans.filter(function (item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });
  // console.log(orders);
  // var result = foo(ans);
  // remove_duplicates(ans)
  // console.log(ans);
  // console.log(ans)

  var counts = [];
  ans.forEach(function (_item) {
    if (typeof counts[_item] === "undefined") counts[_item] = 1;
    else counts[_item]++;
  });
  for (var i in counts) result.push(counts[i]);

  const map1 = new Map();

  for (var i = 0; i < arr.length; i++) {
    map1.set(arr[i], result[i]);
  }
  const mapSort1 = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));
  // console.log(mapSort1);
  // console.log(map1);
  // console.log(ans);
  // console.log(arr);

  // console.log(res)
  // console.log(orders.price)
  // for(i=0;i<orders.length;i++){

  // }

  let label = Array.from(mapSort1.keys());
  console.log(label);
  let d = Array.from(mapSort1.values());
  console.log(d);

  return (
    <Pie
      data={{
        labels: label.slice(0, 9),
        datasets: [
          {
            label: "# of votes",
            data: d.slice(0, 9),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(231, 121, 34, 0.3)",
              "rgba(25, 92, 44, 0.4)",
              "rgba(95, 89, 64, 0.3)",
              "rgba(110, 79, 34, 0.5)",
              "rgba(55, 39, 243, 0.3)",
              "rgba(210, 89, 234, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(231, 121, 34, 1)",
              "rgba(25, 92, 44, 1)",
              "rgba(95, 89, 64, 1)",
              "rgba(110, 79, 34, 1)",
              "rgba(55, 39, 243, 1)",
              "rgba(210, 89, 234, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      height={300}
      width={600}
      options={{
        maintainAspectRatio: true,
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true,
        //       },
        //     },
        //   ],
        // },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }}
    />
  );
};

export default GraphScreen;
