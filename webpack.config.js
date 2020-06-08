
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
console.log('isDevelopment', isDevelopment);

module.exports = {
    /** Точка входа приложения */
    // entry: './src/index.js',
    entry: ['@babel/polyfill', './src/index.js'],
    /** На выходе получаем */
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    mode: 'development',
    devtool: isDevelopment ? 'source-map' : '' ,

    /** Набор инструментов(плагинов) */
    plugins: [
        /**
             * Html-webpack-plugin автоматически сгенирирует index.html и 
             * внедрит все необходимые файлы CSS, JS, manifest и favicon в разметку.
             * */
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png',
            minify: {
                collapseWhitespace: !isDevelopment
            }
        })
    ],

    /**Все что касается модулей  */
    module: {
        /** Правила обработки модулей перед их загрузкой в главный файл*/
        rules: [
            {
                /** Какой файл или файлы должны быть преобразованы */
                test: /\.css$/,
                /** Какой загрузчик должен быть использован */
                loader: ['style-loader', 'css-loader']
                /**1. пропсукается через 'css-loader'(обрабатвает импорты css файлов)
                    2. потом style-loader подключает данные файлы в хедер html файла */
            },

            {
                /**Обработка изображений */
                test: [/\.gif$/, /\.jpg$/, /\.png$/],
                loader: 'file-loader',
                options: {
                    name: 'static/[name].[ext]',
                }
            },
            {
                test: /\.js$/,
                //исключая node_modules/
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    /** preset - набор плагинов*/
                    presets: [
                        /** Персет для поддержки современного js */
                        '@babel/preset-env'
                    ]
                }
            },

        ]
    }

}
