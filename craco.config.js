module.exports = {
    webpack: {
        configure: {
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            name: 'vendor',
                            test: /[\\/]node_modules[\\/]/
                        },
                        commonStyles: {
                            name: 'common-styles',
                            test: /src\/components.*\.(sa|sc|c)ss$/,
                            chunks: 'all',
                            enforce: true,
                        },
                    },
                },
            },
        },
    },
};
