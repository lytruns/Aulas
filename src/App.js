import React from "react";
import Charts_Google from './components/Charts/Charts_Google/Charts_Google';
import Area_Chart from './components/Charts/Area_Chart/Area_Chart';
import Bar_Chart_H from './components/Charts/Bar_Chart_H/Bar_Chart_H';
import Bar_Chart_V from './components/Charts/Bar_Chart_V/Bar_Chart_V';
import Table_Chart from './components/Charts/Table_Chart/Table_Chart';
import GeoCharts from './components/Charts/Maps/GeoCharts/GeoCharts';
import SimpleMap from './components/Charts/Maps/SimpleMap/SimpleMap';
import "./App.css";
import unesp from "./assets/Unesp.jpg";



function App() {
  return (
    //fragment
    <>
      <h1>Introdução ReactJs</h1>
      <img width={100} src={unesp} />;
      <Charts_Google/>
      <Area_Chart/>
      <Bar_Chart_H/>
      <Bar_Chart_V/>
      <Table_Chart/>
      <GeoCharts/>
      <SimpleMap/>
      
      
    </>
  );
}

export default App;


