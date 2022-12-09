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
      _solutions: {
        type: 'relationship',
        label: 'Solutions',
        withType: 'our-solutions',
        builders: {
          project: {
            title: 1,
            image: 1,
            shortDescription: 1,
            _url: 1
          }
        },
      },
      _industries: {
        type: 'relationship',
        label: 'Industries',
        withType: 'industries',
        builders: {
          project: {
            title: 1,
            image: 1,
            _url: 1
          }
        },
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
        fields: ['hero', 'clients', 'payments', '_solutions', '_industries']
      }
    }
  }
};
