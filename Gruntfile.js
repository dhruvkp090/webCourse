'use strict';

module.exports = function(grunt){
    const sass = require('node-sass');
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({

        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist:{
                files: {
                    'bootstrapStuff/Bootstrap4/conFusion/css/styles.css': 'bootstrapStuff/Bootstrap4/conFusion/css/styles.scss'
                }
            }
        },
        watch: {
            files: 'bootstrapStuff/Bootstrap4/conFusion/css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'bootstrapStuff/Bootstrap4/conFusion/css/*.css',
                        'bootstrapStuff/Bootstrap4/conFusion/*.html',
                        'bootstrapStuff/Bootstrap4/conFusion/js/*.js'

                    ],
                    options: {
                        watchTask: true,
                        server: {
                            baseDir: 'bootstrapStuff/Bootstrap4/conFusion'
                        }
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
}