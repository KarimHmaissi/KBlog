// Expose Raven
window.Raven = require('raven-js');

// Load CSS via Webpack to be able to require Bootstrap, Font Awesome, etc. from npm
require('styles/bootstrap.css');
require('styles/styles.scss');
require('styles/fullscreen.scss');
require('apps/index.scss');


// JavaScript main file
require('javascripts/app');
require('apps');

require('javascripts/vendor/bootstrap.js');
require('javascripts/vendor/waypoints.js');
require('javascripts/vendor/clusterize.js');
