module.exports = {
    all: {
        options: {
            test: true
        },
        files: {
            'xunit/casper-results.xml': ['src/test']
        }
    },
    tasks: ['default']
};
