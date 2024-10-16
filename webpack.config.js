const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'public/js'), // Output directory for bundled files
        filename: 'bundle.js', // Name of the output bundle
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Match .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel to transpile JSX
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Use the necessary presets
                    },
                },
            },
            {
                test: /\.css$/, // Match .css files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions
    },
    mode: 'development', // Set mode to development for easier debugging (change to production for final build)
};
