module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    icon: 'pillar',
    label: 'Four Columns'
  },
  icons: {
    pillar: 'Pillar'
  },

  fields: {
    add: {
      category1: {
        type: 'area',
        label: 'Category 1',
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
                },
                {
                  tag: 'h5',
                  label: 'Heading 5 (H5)'
                },
                {
                  tag: 'h6',
                  label: 'Heading 6 (H6)'
                },
              ]
            },
          },
        },
      },
      category2: {
        type: 'area',
        label: 'Category 2',
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
                },
                {
                  tag: 'h5',
                  label: 'Heading 5 (H5)'
                },
                {
                  tag: 'h6',
                  label: 'Heading 6 (H6)'
                },
              ]
            },
          },
        },
      },
      category3: {
        type: 'area',
        label: 'Category 3',
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
                },
                {
                  tag: 'h5',
                  label: 'Heading 5 (H5)'
                },
                {
                  tag: 'h6',
                  label: 'Heading 6 (H6)'
                },
              ]
            },
          },
        },
      },
      category4: {
        type: 'area',
        label: 'Category 4',
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
                },
                {
                  tag: 'h5',
                  label: 'Heading 5 (H5)'
                },
                {
                  tag: 'h6',
                  label: 'Heading 6 (H6)'
                },
              ]
            },
          },
        },
      },
      imgOne: {
        type: 'area',
        label: 'Image 1',
        className: 'columns-images ',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
      },
      imgTwo: {
        type: 'area',
        label: 'Image 2',
        className: 'columns-images ',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
      },
      imgThree: {
        type: 'area',
        label: 'Image 3',
        className: 'columns-images',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
      },
      imgFour: {
        type: 'area',
        label: 'Image 4',
        className: 'columns-images ',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
      },
    }
  }
};