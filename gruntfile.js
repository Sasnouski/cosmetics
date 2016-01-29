'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: 'public/index.html'
            }
        },
        watch: {
            //watching for bower to add script tags
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            css: {
                files: ['public/css/*.less'],
                tasks: ['less:dev']
            }

        },
        browserSync: {
            livereload: {
                options: {
                    files: [
                        'public/*.html',
                        'public/css/*.less',
                        'public/images/{,*/}*',
                        'public/scripts/{,*/}*.js'
                    ],
                    port: 3000,
                    server: {
                        baseDir: ['public']
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= browserSync.livereload.options.port %>'
            }
        },
        less: {
            dev: {
                files: {
                    'public/css/main.css': 'public/css/main.less'
                }
            }
        },
        concat: {
            javascript:{
                src: [],
                dest: "build/scripts.js"
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
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    //grunt.loadNpmTasks('grunt-wiredep');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('serve', function(target){
        grunt.task.run([
            'wiredep',
            'open',
            'less:dev',
            'browserSync:livereload',
            'watch'
        ]);
    });
};