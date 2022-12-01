module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Contact Us Widget',
  },
  fields: {

    add: {
      contacts: {
        label: 'Contact Info',
        type: 'array',
        titleField: 'Contact Info',
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
          }
        },
      },


    },
    group: {
      contactFields: {
        label: 'Contact fields',
        fields: ['contacts']
      }
    }
  }
};