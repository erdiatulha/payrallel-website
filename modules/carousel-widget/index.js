module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Our Clients Section',
  },
  fields: {
    add: {
      imgSplideOne: {
        type: 'area',
        label: 'Image 1',
        className: '',
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
        className: '',
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
        className: '',
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
