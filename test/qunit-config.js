var qunit = require('qunit');

qunit.run({
    code: {
        path: './src/lib.js'
    },
    tests: [
        './lib.test.js'
    ]
});
