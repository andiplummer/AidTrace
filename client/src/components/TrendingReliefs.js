import React from 'react'
import { Chart } from "react-google-charts";

export default class TrendingReliefs extends React.Component {
  constructor(props) {
    super(props)
  }         

  render() {
    return (
      <div className="topDonations">
        <h3>Trending Reliefs</h3>
        <Chart
          className="chart"
          width={"400px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Company name",
              "Donations",
              { role: "style" },
              {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify"
              }
            ],
            ["UNICEF", 56829, "#1b2136", null],
            ["World Vision", 47362, "#1b2136", null],
            ["All Hands and Hearts", 37382, "#1b2136", null],
            ["World Food Program", 29329, "#1b2136", null],
            ["Direct Relief", 10938, "#1b2136", null],
          ]}
          options={{
            title: "",
            width: 450,
            height: 350,
            backgroundColor: "transparent",
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
            animation: {
              startup: true,
              easing: 'bar',
              duration: 1500,
            }
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
      </div>
    )
  }
}