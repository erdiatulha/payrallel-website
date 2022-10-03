module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Columns',
  },
  fields: {
    add: {
      columns: {
        label: 'Select a column configuration',
        type: 'select',
        choices: [
          {
            label: 'Single Column, 50%',
            value: 'single-50',
          },
          {
            label: '50% / 50%',
            value: '50-50',
          },
          {
            label: '30% / 30% / 30%',
            value: '30-30-30',
          }
        ]
      },
      singleColumn: {
        label: 'Single Column',
        type: 'array',
        titleField: 'Single Column',
        fields: {
          add: {
            image: {
              type: 'attachment',
              label: 'Image',
              className: 'bp-image',
              options: {
                widgets: {
                  '@apostrophecms/image': {}
                },
                max: 1,
              },
              required: true,
            }
          }
        },
        if: {
          columns: 'single-50'
        }
      },
      twoColumns: {
        label: 'Two Columns',
        type: 'array',
        titleField: 'Two Columns',
        fields: {
          add: {
            image: {
              type: 'attachment',
              label: 'Image',
              className: 'bp-image',
              options: {
                widgets: {
                  '@apostrophecms/image': {}
                },
                max: 2,
              },
              required: true,
            }
          }
        },
        if: {
          columns: '50-50'
        }
      },
      threeColumns: {
        label: 'Three Columns',
        type: 'array',
        titleField: 'Three Columns',
        fields: {
          add: {
            image: {
              type: 'attachment',
              label: 'Image',
              className: 'bp-image',
              options: {
                widgets: {
                  '@apostrophecms/image': {}
                },
                max: 3,
              },
              required: true
            }
          }
        },
        if: {
          columns: '30-30-30'
        }
      },
    }
  }
};