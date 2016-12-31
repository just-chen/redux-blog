var path = require('path');
module.exports = {
    entry:path.join(__dirname,'src/app.js'),
    output:{
        path:path.join(__dirname,'build'),
        filename:'app.bundle.js',
        publicPath:'/build/',
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                include:path.join(__dirname,'src'),
                loader:'babel',
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
  },
}