module.exports = {
    name: 'job',
    contextual: true,
    addFields: [
      {
        name: 'description',
        type: 'singleton',
        widgetType: 'apostrophe-rich-text',
        options: {
          toolbar: [ 'Bold', 'Italic', 'Link' ]
        }
      }
    ]  
  };