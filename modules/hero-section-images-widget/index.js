module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Hero Section Images Widget',
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Title',
        options: {
          max: 150
        }
      },
      description: {
        type: 'string',
        label: 'Description',
        options: {
          max: 150
        }
      },
      imgSplideOne: {
        type: 'area',
        label: 'Image 1',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      imgSplideTwo: {
        type: 'area',
        label: 'Image 2',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      imgSplideThree: {
        type: 'area',
        label: 'Image 3',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
    },

  }
};