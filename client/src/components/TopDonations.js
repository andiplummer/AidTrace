import React from "react";
import { Chart } from "react-google-charts";

export default class TopDonations extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  render() {
    return (
      <div className="topDonations">
        <h3>Donor Leaderboard</h3>
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
            ["Google", 1000000, "#1b2136", null],
            ["Amazon", 900000, "#1b2136", null],
            ["Facebook", 850000, "#1b2136", null],
            ["Salesforce", 670500, "color: #1b2136", null],
            ["Apple", 600000, "color: #1b2136", null],
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
        {/* <div className="donationHeader">
          <h3>Donor Leaderboard</h3>
          <h3>Donated</h3>
        </div>
        <div className="donationContainer">
          <p>Google</p>
          <p>$1,000,300</p>
        </div>
        <div className="donationContainer">
          <p>Amazon</p>
          <p>$890,500</p>
        </div>
        <div className="donationContainer">
          <p>Facebook</p>
          <p>$700,000</p>
        </div>
        <div className="donationContainer">
          <p>Salesforce</p>
          <p>$500,000</p>
        </div> */}
      </div>
    );
  }
}
