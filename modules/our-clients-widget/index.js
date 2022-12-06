module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Our Clients Widget',
  },
  fields: {
    add: {
      clients: {
        label: 'Our Clients Section',
        type: 'array',
        titleField: 'Our Clients',
        fields: {
          add: {
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
          }
        }
      }
    }
  }
};