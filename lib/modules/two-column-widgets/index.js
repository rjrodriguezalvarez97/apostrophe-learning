module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Two Column Layout',
  contextualOnly: true,
  addFields: [
    {
      name: 'areaLeft',
      type: 'area',
      label: 'Left Area'
    },
    {
      name: 'areaRight',
      type: 'area',
      label: 'Right Area'
    }
  ],
  construct: function(self, options) {
    var superPushAssets = self.pushAssets;
    self.pushAssets = function() {
      superPushAssets();
      self.pushAsset('stylesheet', 'always', { when: 'always' });
    };
  }        
};