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
            '@apostrophecms/html': {}
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