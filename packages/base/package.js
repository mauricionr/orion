Package.describe({
  name: 'orionjs:base',
  summary: 'Orion',
  version: '1.0.0',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'meteor-platform',
    'underscore',
    'orionjs:options',
    'orionjs:reactive-templates',
    'iron:router@1.0.7',
    ]);

  api.imply([
    'meteor-platform',
    'underscore',
    'iron:router'
    ]);

  api.addFiles([
    'init.js', 
    'helpers.js', 
    'layouts.js'
    ]);

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
