module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-plato');

    grunt.initConfig({
        jshint: {
            all: ['*.js', 'src/*.js', 'test/*.js']
        },
        qunit: {
            all: ['test/index.html']
        },
        plato: {
            js: {
                files: {
                    'report': ['src/**/*.js', 'test/**/*.js']
                }
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'qunit', 'plato']);
    grunt.registerTask('default', ['test']);
};
