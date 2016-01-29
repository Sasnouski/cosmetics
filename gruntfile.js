

module.exports = function(grunt) {
    var app_files = ['script.js', 'book.js'],
        output = 'build/scripts.js';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: 'public/index.html'
            }
        },
        watch: {
            javascript: {
                files: ['<%= concat.javascript.src %>'],
                tasks: ['concat', 'uglify']
            }
        },
        concat: {
            javascript:{
                src: app_files,
                dest: output
            }
        },
        uglify:{
            javascript: {
                files: {
                    'build/scripts.min.js': '<%= concat.javascript.dest %>'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};