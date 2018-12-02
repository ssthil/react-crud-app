
# CRUD app using React and Bootstrap 4

This react app with webpack 4 and latest babel config. This is a very basic responsive carousel app using React.

## Project description
Used stacks are ```React + webpack 4 +  API(pixabay) + media query```

### Step 1
Make a new project

```
mkdir react-responsive-carousel && cd $_ && yarn init -y
```

#### Setting Up React and Babel

We need to install webpack as a **dev dependency** and webpack-cli

```
yarn add webpack webpack-cli webpack-dev-server
```

Install react and react-dom as a **dependency**

```
yarn add react react-dom
```

Then install babel as a **dev dependency**

```
@babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin --dev
```

Create config files

```
touch webpack.config.js .babelrc README.md .gitignore
```

Create `src` directory and `index` files

 ```
 mkdir src && cd $_ && touch index.js index.html
 ```

### Step 2

Add this code in webpack.config.js file to state the rules for our babel-loader

```
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
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
  },
  plugins: [htmlPlugin]
};
```

### Step 3

When you state that you’re using babel-loader in your webpack config, it will look for ```.babelrc``` file if there is one.

```
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

### Step 4
index.html with ```id="app"```

### Step 5
In ```index.js```

```
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <h1>Hello React</h1>
    </div>
  )
}
const SelectorRef = document.getElementById("app");

ReactDOM.render(<App />, SelectorRef);
```
