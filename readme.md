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
    <h1>Hello Word!!</h1>
    <script src="./bundle.js"></script>
  </body>
</html>
```

- **src/index.js**

```
const soma = (a, b) => a + b;

alert(soma(1, 3));
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
      }
    ]
  }
};
```

Adcione ao **package.json**

```
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development"
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

Inclua no **src/App.js**

```
import "./App.css";
```

## Importando imagens

Execute o comando

```
yarn add file-loader -D
```

Adcione uma nova rule ao **webpack.config.js**

```
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
```

Crie uma pasta **src/assets** e coloque um aquivo lá.

Faça a importação da imagem no arquivo **src/App.js**

> Exemplo

```
import React from "react";
import "./App.css";

import profile from "./assets/profile.jpeg";

function App() {
  return <img width={100} src={profile} />;
}

export default App;

```

## Class Components

Execute o comando

```
yarn add @babel/plugin-proposal-class-properties -D
```

Inclua no arquivo **babel.config.js**

```
plugins: ["@babel/plugin-proposal-class-properties"]
```

Crie o arquivo **components/TechList.js**

```
import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node Js", "React Js", "React Native"]
  };

  render() {
    return (
      <ul>
        {this.state.techs.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
    );
  }
}

export default TechList;

```

Faça a importação do _component_ no arquivo **src/App.js**

```
import TechList from "./components/TechList";

<TechList />
```

## Debugando React com DevTools

Instale a Extensão do Chrome **React Developer Tools**

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=pt-BR
