module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      hero: {
        type: 'area',
        options: {
          widgets: {
            'hero-section': {},
          }
        }
      },
      solutions: {
        type: 'area',
        options: {
          widgets: {
            'four-columns': {},
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
      clients: {
        type: 'area',
        options: {
          widgets: {
            'our-clients': {},
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
    },
    group: {
      homeFields: {
        label: 'Homepage Section fields',
        fields: ['hero', 'solutions', 'industries', 'clients', 'payments']
      }
    }
  }
};
