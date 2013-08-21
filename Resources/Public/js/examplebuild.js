/*
 * Example buildfile.
 *
 * This will be used to create the compress JavaScript in a production environment.
 */
 
({
    // Leave as is
    baseUrl: '../../../../',

    // Leave as is
    out: '../compiled/js/main.js',

    // Compress
    optimize: 'uglify2',

    // App manifest location (to avoid duplicate config)
    mainConfigFile: 'examplemain.js',

    // App manifest module
    include: ['tev_boilerplate/examplemain']
})
