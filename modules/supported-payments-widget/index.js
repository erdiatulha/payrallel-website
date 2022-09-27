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
            category: {
              type: 'string',
              label: 'Category of Payments'
            },
            logoImages: {
              type: 'array',
              label: 'Logo Images',
              titleField: 'Logo Images Row',
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