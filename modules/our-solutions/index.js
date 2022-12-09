module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Our Solutions',
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
      },
      body: {
        label: 'Blog Post Content',
        // The `area` field type supports dynamic content widgets. It is
        // covered in the "Areas and widgets" guide section.
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              // 👇 Toolbar configuration
              toolbar: [
                'styles',
                'bold',
                'italic',
                '|',
                'strike',
                'link',
                '|',
                'horizontalRule',
                '|',
                'bulletList',
                'orderedList',
                'blockquote',
                'codeBlock',
                '|',
                'alignLeft',
                'alignCenter',
                'alignRight',
                'alignJustify',
                'undo',
                'redo',

              ],
              // 👇 Styles configuration
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h1',
                  label: 'Heading 1 (H1)'
                },
                {
                  tag: 'h2',
                  label: 'Heading 2 (H2)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/image': {
              options: {
                className: 'content-image'
              }
            },
            '@apostrophecms/video': {},
            'columns': {},
            'containers': {},
          }
        }
      },
    },
    group: {
      solutionFields: {
        label: 'Solution fields',
        fields: ['title', 'shortDescription', 'image', 'titleDetails', 'subTitle', 'subFeature', 'features', 'body']
      }
    }
  }
};