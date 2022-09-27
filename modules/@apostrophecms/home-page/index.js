module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      heroImage: {
        type: 'attachment',
        label: 'Hero Image',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      solutions: {
        type: 'area',
        options: {
          widgets: {
            'solutions-section': {},
          }
        }
      },
      industries: {
        type: 'area',
        options: {
          widgets: {
            'industries-section': {},
          }
        }
      },
      ourClients: {
        type: 'area',
        options: {
          widgets: {
            'carousel': {},
          }
        }
      },
      payments: {
        type: 'area',
        options: {
          widgets: {
            'supported-payments': {},
          }
        }
      },
      whyPayrallel: {
        type: 'area',
        options: {
          widgets: {
            'why-payrallel': {},
          }
        }
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
