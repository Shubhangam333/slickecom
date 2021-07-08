import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const ReviewGraphScreen = ({ history }) => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // dispatch(listProducts("", 1));
  console.log(products);
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, userInfo, history]);
  var res = [];
  var result = [0, 0, 0, 0, 0];
  products.map((product) => res.push(product.numReviews));
  console.log(res);

  res.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < res.length; i++) {
    if (res[i] < 3) {
      // console.log("Yes");
      result[0] = result[0] + 1;
    } else if (res[i] >= 3 && res[i] < 6) {
      result[1]++;
    } else if (res[i] >= 6 && res[i] < 9) {
      result[2]++;
    } else if (res[i] >= 9 && res[i] < 15) {
      result[3]++;
    } else {
      result[4]++;
    }
  }
  console.log(result);
  return (
    <>
      <h1 className="graphh1">Review Graph</h1>
      <Pie
        data={{
          labels: ["less than 3", "above 3", "above 6 ", "above 9", "above 15"],
          datasets: [
            {
              label: "rating",
              data: result,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
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

export default ReviewGraphScreen;
