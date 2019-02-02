//Dependecies
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//Enviroment
const modeEnviroment = process.env.NODE_ENV !== "production";

//Paths
const PATHS = {
  index: path.join(__dirname,'src/index'),
  build: path.join(__dirname,'/dist'),
  base: path.join(__dirname, 'src')
};

//Dynamic enviroment mode
const enviroment = ()=> {
  if(modeEnviroment){
    return "development";
  }else{
    return "production";
  }
}


module.exports = {
  mode: enviroment(),
  devtool: 'cheap-module-eval-source-map',
  entry: [
    PATHS.index
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.(jsx?)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  }
};
