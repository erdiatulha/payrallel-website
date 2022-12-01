module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Industries',
    // Additionally add a `pluralLabel` option if needed.
  },
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
      titleDetails: {
        label: 'Title Details',
        type: 'string'
      },
      subTitle: {
        label: 'Sub Title',
        type: 'string'
      },
      shortDescription: {
        label: 'Short Description',
        type: 'string'
      },
      subFeature: {
        label: 'Sub Feature',
        type: 'string'
      },
      features: {
        label: 'Features',
        type: 'array',
        titleField: 'Features',
        fields: {
          add: {
            featureTitle: {
              type: 'string',
              label: 'Feature Title'
            },
            featureDescription: {
              type: 'string',
              label: 'Feature Description'
            },
          }
        }
      }
    },
    group: {
      industriesFields: {
        label: 'Industries fields',
        fields: ['title', 'shortDescription', 'image', 'titleDetails', 'subTitle', 'subFeature', 'features']
      }
    }
  }
};