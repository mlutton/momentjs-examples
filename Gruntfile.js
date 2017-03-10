/**
 * Created by mlutton on 3/9/17.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            server: {
                src: 'server/*.js',
                options: {
                    specs: 'spec/*.js',
                    helpers: 'helpers/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('test', ['jasmine']);

    grunt.registerTask('default', ['test']);

};
