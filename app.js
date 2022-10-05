require("apostrophe")({
    shortName: "payrallel-website",
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
        "@apostrophecms/db": {
            options: {
                uri: "mongodb+srv://admin:jMI6pxJj9ktg2Vlb@payrallel.bfdxogr.mongodb.net/?retryWrites=true&w=majority",
            },
        },
        "@apostrophecms/rich-text-widget": {
            options: {
                className: "bp-rich-text",
            },
        },
        // "@apostrophecms/image-widget": {
        //     options: {
        //         className: 'carousel-images',
        //     },
        // },
        "@apostrophecms/image-widget": {
            options: {
                className: 'columns-images',
            },
        },
        "@apostrophecms/video-widget": {
            options: {
                className: "bp-video-widget",
            },
        },
        // `asset` supports the project's webpack build for client-side assets.
        asset: {},
        //pieces
        "blog-post": {},
        // The project's first custom page type.
        "default-page": {},
        "blog-post-page": {},
        //widgets of homepage
        "carousel-widget": {},
        "four-columns-widget": {},
        "industries-section-widget": {},
        "supported-payments-widget": {},
        "why-payrallel-widget": {},
        'columns-widget': {},
        "containers-widget": {},
    },
});
