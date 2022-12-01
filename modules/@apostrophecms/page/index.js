// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: 'blog-post-page',
        label: 'Blog Post'
      },
      {
        name: 'our-solutions-page',
        label: 'Our Solutions'
      },
      {
        name: 'industries-page',
        label: 'Industries We Serve'
      },
      {
        name: 'contact-us-page',
        label: 'Contact Us'
      },
    ]
  }
};
