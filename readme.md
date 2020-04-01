# Introdução ao ReactJs

## Configurando estrutura

Execute os comandos:

```
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
yarn add babel-loader -D
yarn add webpack-dev-server -D
yarn add react react-dom
```

> Para usar _PropTypes_

```
yarn add prop-types
```

Crie os arquivos:

- **public/index.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>ReactJs</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="./bundle.js"></script>
  </body>
</html>
```

- **src/App.js**

```
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
```

- **babel.config.js**

```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"]
};
```

- **webpack.config.js**

```
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
```

Adcione ao **package.json**

```
{
  "name": "react-introducao",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.1.0",
    "file-loader": "^4.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.38.0",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.7.2"
  },
  "dependencies": {
    "google-map-react": "^1.1.7",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-google-charts": "^3.0.15"
  },
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development"
  }
}
```

> Execute yarn dev e veja o projeto funcionando

## Criando componente raiz

Altere o arquivo **public/index.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>ReactJs</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="./bundle.js"></script>
  </body>
</html>
```

Altere tambem o aquivo **src/index.js**

```
import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App />, document.getElementById("app"));
```

Crie o arquivo **src/App.js**

```
import React from "react";

function App() {
  return <h1>Hello Rocket</h1>;
}

export default App;
```

## Importando CSS

Execute o comando

```
yarn add style-loader css-loader -D
```

Adcione uma nova rule ao **webpack.config.js**

```
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
```

Crie o arquivo **src/App.css**

```
body {
  background: #7159c1;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
```


