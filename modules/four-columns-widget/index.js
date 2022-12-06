module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    icon: 'pillar',
    label: 'Four Columns'
  },
  icons: {
    pillar: 'Pillar'
  },

  fields: {
    add: {
      solutions: {
        label: 'Solutions Section',
        type: 'array',
        titleField: 'Solutions Section',
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
            description: {
              label: 'Description',
              type: 'string'
            },
            url: {
              label: 'Solution Url',
              type: 'url'
            }
          }
        },
      },
    }
  }
};