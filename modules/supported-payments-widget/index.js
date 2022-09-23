module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Supported Payments',
  },
  fields: {
    add: {
      logoOne: {
        type: 'area',
        label: 'Image',
        className: "column-img",
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      logoTwo: {
        type: 'area',
        label: 'Image',
        className: "column-img",
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      logoThree: {
        type: 'area',
        label: 'Image',
        className: "column-img",
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      logoFour: {
        type: 'area',
        label: 'Image',
        className: "column-img",
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      logoFive: {
        type: 'area',
        label: 'Image',
        className: "column-img",
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