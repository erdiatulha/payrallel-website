module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Solutions Section Widget',
  },
  fields: {
    add: {
      imgColumnOne: {
        type: 'area',
        label: 'Image',
        className: '',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      imgColumnTwo: {
        type: 'area',
        label: 'Image',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      imgColumnThree: {
        type: 'area',
        label: 'Image',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      imgColumnFour: {
        type: 'area',
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
};