module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Containers',
  },
  fields: {
    add: {
      content: {
        type: 'area',
        label: 'Content',
        options: {
          widgets: {
            'columns': {},
            "containers": {},
            "@apostrophecms/rich-text": {
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
            "@apostrophecms/image": {},
          }
        }
      },
      backgroundColor: {
        type: 'color',
        help: 'Background color of the container',
        label: 'Background Color',
        options: {
          format: 'rgb'
        }
      },
      borderColor: {
        type: 'color',
        help: 'Border color of the container',
        label: 'Border Color',
        options: {
          format: 'rgb'
        }
      },
      addBorderRadius: {
        label: 'Border Radius',
        help: 'Adds a 20px border radius',
        type: 'boolean',
        toggle: {
          true: 'Yes',
          false: 'No'
        }
      }
    }
  }
};