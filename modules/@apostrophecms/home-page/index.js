module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
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
            'four-columns': {},
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
      homeFields: {
        label: 'Homepage Section fields',
        fields: ['solutions', 'industries', 'ourClients', 'payments', 'whyPayrallel']
      }
    }
  }
};
