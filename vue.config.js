module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/rack-system-kits/'
        : '/',
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/scss/utils/vars.scss";`
            },
        }
    }
};