var path = require('path');

var apos = require('apostrophe')({
  shortName: 'apostrophe-learning',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-pages': {
      types: [
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'people-page',
          label: 'People'
        }
      ]
    },
    'link-widgets': {},
    'page-link-widgets': {},
    'drawer-widgets': {},
    'two-column-widgets': {},
    'people': {},
    'people-widgets': {
      extend: 'apostrophe-pieces-widgets',
      filters: {
        projection: {
          title: 1,
          phone: 1,
          thumbnail: 1,
          // Not a real database property, but including it in the projection
          // fetches everything needed to populate it
          _url: 1,
        }
      }
    },
    'people-pages': {
      extend: 'apostrophe-pieces-pages',
      construct: function(self, options) {
        var superPushAssets = self.pushAssets;
        self.pushAssets = function() {
          superPushAssets();
          self.pushAsset('stylesheet', 'always', { when: 'always' });
        };
      }   
    }

  }
});
