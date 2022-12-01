module.exports = {
    extend: '@apostrophecms/page-type',
    options: {
        label: 'Contact Us Page'
    },
    fields: {
        add: {
            contacts: {
                type: 'area',
                options: {
                    widgets: {
                        'contact-us': {},
                    }
                }
            },
        },

    }
};
