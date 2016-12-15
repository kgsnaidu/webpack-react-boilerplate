var path = require('path');

module.exports = {
    target : 'web',
    context : __dirname,
    entry : path.resolve(__dirname, 'client', 'js', 'app.jsx'),
    output : {
        path : path.resolve(__dirname, 'build', 'assets', 'js' ),
        publicPath : '/public/assets/js/',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                loader : 'babel'
            }
        ]
    },
    resolve : {
        extensions : ['', 'js', 'jsx'],
        alias : {
            'react': path.join(__dirname, 'node_modules', 'react')
        }
    }
}
