const mix = require('laravel-mix');

mix.js('assets/js/app.js', 'dist/js')
    .sass('assets/scss/app.scss', 'dist/css')
    .setPublicPath('dist');