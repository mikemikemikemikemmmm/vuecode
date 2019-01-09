module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/css/global_color.scss";',
            },
        },
    },
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue6/'
        : '/'
    }
