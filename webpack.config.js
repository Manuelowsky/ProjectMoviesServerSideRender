/*
    Aca almacenamos toda la configuracion que necesitaremos para nuestro proyecto
*/

const path = require('path');
//Añadir el recurso de HTMLwebpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Añadir el recurso de CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


//Modulo de un objeto con la configuracion deseada
module.exports = {
    //Punto de entrada de nuestra aplicación
    entry: './src/index.js',
    //Punto de salida
    output: {
        //Permite saber en que directorio esta nuestro proyecto
        path: path.resolve(__dirname, 'dist'),
        //Nombre del resultante de JS
        filename: 'bundle.js',
        //Apartir de alli se encontraran los elementos
        publicPath: '/'
    },
    resolve: {
        //Extensiones que vamos a utilizar
        extensions: ['.js', '.jsx']
    },
    module: {
        //Reglas que establecemos para trabajar con diferentes tipos de archivos
        rules: [{
            //Test para saber que tipo de extensiones vamos a utilizar
            //Utiliza archivos con extension js y jsx
            test: /\.(js|jsx)$/,
            //Excluir elementos de node_modules
            exclude: /node_modules/,
            //Pasar internamente el loader que utilizaremos (babel)
            use: {
                loader: "babel-loader"
            }
        }, {
            //Test para saber que tipo de extensiones vamos a utilizar
            //Utiliza archivos con extension html
            test: /\.html$/,
            //Pasar internamente el loader que utilizaremos html
            use: {
                loader: "html-loader"
            }

        }, {
            //Test para saber que tipo de extensiones vamos a utilizar
            //Utiliza archivos con extensiones css o sass
            test: /\.(s*)css$/,
            //Pasar internamente el loader que utilizaremos para css y sass
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader'
            ]
        }, {
            //Test para saber que tipo de extensiones vamos a utilizar
            //Utiliza archivos con extensiones png gif o jpg
            test: /\.(png|gif|jpg)$/,
            //Pasar internamente el loader que utilizaremos
            use: [{
                loader: "file-loader",
                //Configuraciones
                options: {
                    //Nombre del archivo de salida
                    name: 'assets/[hash].[ext]'
                }
            }]
        }]
    },
    //Configuracion devserver y para poder trabajar con rutas
    devServer: {
        //Manejo de historia del navegador
        historyApiFallback: true
    },
    plugins: [
        //Instanciando plugin de HTML
        new HtmlWebpackPlugin({
            //Configuracion del plugin
            //Ubicacion del index.html para transformarlo con los elementos que le indiquemos
            template: './public/index.html',
            //Salida de la preparación de HTML a partir del template
            filename: './index.html'
        }),
        //Instanciando el plugin de CSS
        new MiniCssExtractPlugin({
            //Nombre archivo salida de CSS
            filename: 'assets/[name].css'
        })
    ]
}