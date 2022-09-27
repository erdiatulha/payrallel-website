module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Solutions Section',
  },
  fields: {
    add: {
      solutions: {
        label: 'Solutions Section',
        type: 'array',
        titleField: 'Solutions',
        fields: {
          add: {
            category: {
              type: 'string',
              label: 'Category of Solutions'
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