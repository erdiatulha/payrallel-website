module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Hero Section Widget',
  },
  fields: {
    add: {
      heroSection: {
        label: 'Hero Section',
        type: 'array',
        titleField: 'Hero Section',
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
            title: {
              label: 'Title',
              type: 'string'
            },
            subTitle: {
              label: 'Sub Title',
              type: 'string'
            },
          }
        },
      },
    }
  }
};