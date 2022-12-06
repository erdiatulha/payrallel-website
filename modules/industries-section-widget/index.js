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
            title: {
              type: 'string',
              label: 'Title'
            },
            shortDescription: {
              type: 'string',
              label: 'Short Description'
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
            },
            url: {
              label: 'Industries Url',
              type: 'url'
            }
          }
        }
      }
    }
  }
};