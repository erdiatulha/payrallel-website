require('apostrophe')({
  shortName: 'payrallel-website',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget',
        className: 'logo-img',
        className: 'column-img',
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    //pieces
    'blog-post': {},
    // The project's first custom page type.
    'default-page': {},
    'blog-post-page': {},
    //widgets of homepage
    'carousel-widget': {},
    'solutions-section-widget': {},
    'industries-section-widget': {},
    'supported-payments-widget': {},
    'why-payrallel-widget': {}
  }
});
