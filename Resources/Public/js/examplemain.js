/*
 * Assign a Global namespace
 */
var TEV = window.TEV || {};


/*
 * Require.js config
 */
require.config({

    // Should be the base extensions directory
    baseUrl: 'typo3conf/ext/',
    
    // Add an entry for each extension you want to use
    paths: {
        'tev_boilerplate': 'tev_boilerplate/Resources/Public/js',

        // Special conf. for jQuery
        'jquery':          'tev_boilerplate/Resources/Public/js/lib/jquery'

        /* 'your_ext':     'your_ext/Resources/Public/js'*/
    }
});


/*
 * Bootstrap dependencies
 */
require([
    'jquery',
    'tev_boilerplate/lib/modernizr',
    'tev_boilerplate/scripts/breakpoint'
    /*'your_ext/scripts/extra.js'*/
]);
