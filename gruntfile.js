'use strict';

module.exports = function (grunt) {

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
        tasks: ['less']
      }

    },
    browserSync: {
      livereload: {
        options: {
          files: [
            'public/*.html',
            'public/views/*/*.html',
            'public/css/*.less',
            'public/css/*.css',
            'public/images/{,*/}*',
            'public/scripts/*.js',
            'public/scripts/controllers/*.js'
          ],
          port: 3000,
          watchTask: true,
          server: {
            baseDir: ['public']
          }
        }
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
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'build/scripts.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'build/scripts.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  //grunt.loadNpmTasks('grunt-wiredep');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('serve',
    [
      'wiredep',
      'less',
      'browserSync:livereload',
      'watch'
    ]);
  grunt.registerTask('pack',
    [
      'concat',
      'uglify'
    ]);

};