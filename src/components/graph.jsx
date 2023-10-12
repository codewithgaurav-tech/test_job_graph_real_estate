import React, { useEffect, useState } from "react";
import { Chart } from "react-charts";
import axios from "axios";

const MyChart = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Make an API request to fetch your data
    axios.get("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
      .then(response => {
        // Process the API data here
        const formattedData = response.data.data.map(item => ({
          x: item.data_year,
          y: item.Arson,
        }));
        setApiData(formattedData);
      })
      .catch(error => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);
  const data = React.useMemo(
    () => [
      {
        data: apiData,
      }
    ],
    [apiData]
  );


  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "linear",
        position: "bottom",
        key: "x",
      },
      {
        type: "linear",
        position: "left",
        key: "y",
      },
    ],
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "160px",
      }}
    >
      {apiData.length > 0 ? (
        <Chart data={data} axes={axes} />
      ) : (
        <div>Please Wait...</div>
      )}
    </div>
  );
};

export default MyChart;
