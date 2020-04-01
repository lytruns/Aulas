import React from 'react';
import { Chart } from "react-google-charts";
 
class Charts_Google extends React.Component {
    render() {
    return (
      <div className={"Charts_Google"}>
        <Chart
          chartType="ScatterChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
          width="100%!"
          height="100%!"
          legendToggle
        />
      </div>
    );
  }
}
export default Charts_Google;
