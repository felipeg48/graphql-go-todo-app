const webpack = require('webpack'); // Import webpack

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
            }),
        ],
    },
};