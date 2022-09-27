module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Industries Section',
  },
  fields: {
    add: {
      industries: {
        label: 'Industries Section',
        type: 'array',
        titleField: 'Industries We Serve',
        fields: {
          add: {
            category: {
              type: 'string',
              label: 'Category of Industries'
            },
            image: {
              type: 'attachment',
              label: 'Image',
              options: {
                widgets: {
                  '@apostrophecms/image': {}
                },
                limit: 1,
              },
              required: true
            }
          }
        }
      }
    }
  }
};