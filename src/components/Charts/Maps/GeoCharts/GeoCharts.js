import React from 'react';
import { Chart } from "react-google-charts";
 
class GeoCharts extends React.Component {
    render() {
    return (
      <div className={"GeoCharts"}>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="GeoChart"
          data={[
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700],
          ]}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="BIzaSyC9OMSh2N5yiskslWXRquq1SBj3DEdV0qg"
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}
export default GeoCharts;

