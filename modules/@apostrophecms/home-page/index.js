module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            'hero-section-images': {},
          }
        }
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
      }
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
