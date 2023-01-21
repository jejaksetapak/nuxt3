// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
            title: 'nuxt3',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            script: [
                {
                    src: '_nuxt/assets/js/bootstrap.bundle.min.js',
                }
            ],
        },
    },
    css: [
        "@/assets/css/bootstrap.min.css",
        "@/assets/css/custom.css",
    ],

})
