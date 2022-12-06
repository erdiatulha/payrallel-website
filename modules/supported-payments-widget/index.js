module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Supported Payments',
  },
  fields: {
    add: {
      payments: {
        label: 'Supported Payments Section',
        type: 'array',
        titleField: 'Supported Payments',
        fields: {
          add: {
            title: {
              type: 'string',
              label: 'tTitle'
            },
            logoImages: {
              type: 'array',
              label: 'Logo Images',
              titleField: 'Logo Images',
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
                  }
                }
              },
            }
          }
        }
      }
    }
  }
};