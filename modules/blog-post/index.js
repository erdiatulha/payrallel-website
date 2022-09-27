module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Blog Post',
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      coverImage: {
        type: 'attachment',
        label: 'Blog Cover Image',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          limit: 1,
        },
        required: true
      },
      blogDate: {
        label: 'Date',
        type: 'dateAndTime'
      },
      description: {
        label: 'Description',
        type: 'string'
      },
      authorName: {
        label: 'Author Name',
        type: 'string'
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
            '@apostrophecms/video': {}
          }
        }
      },
    },
    group: {
      blogFields: {
        label: 'Blog fields',
        fields: ['title', 'blogDate', 'description', 'coverImage', 'authorName', 'body']
      }
    }
  }
};