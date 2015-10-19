 module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        // ASSEMBLE
        assemble: {
            options: {
                layout: "resources/layouts/default.hbs",
                flatten: true,
                partials: ['resources/parts/*.hbs']
            },
            pages: {
                files: {
                    './': ['resources/pages/*.hbs']
                }
            },
            partials : {
                options : {
                    layout: "",
                    flatten:false
                },
                files: {
                    './': ['resources/parts/*.hbs']
                }
            }
        },
        // WATCH
        watch: {
            content : {
                files : ['resources/**/*.hbs'],
                tasks: ['assemble']
            }, 
            css : {
                files : ['resources/assets/sass/**/*.scss'],
                tasks : ['sass'],
                options : {
                    spawn : false,
                }
            },
            scripts : {
                files : ['resources/assets/js/**/*.js', 'resources/assets/js/*.js'],
                tasks : ['uglify'],
                options : {
                    spawn : false,
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'resources/assets/css/main.css': 'resources/assets/sass/main.scss'
                }
            }
        },
        connect: {
            server: {
              options: {
                port: 8000,
                base: './',
                open:true
              }
            }
        },
        uglify: {
            vendor: {
              files: [{
                  src: 'resources/assets/js/vendor/*.js',
                  dest: 'resources/assets/js/vendor.min.js'
              }]
            },
            main: {
              files: [{
                  src: 'resources/assets/js/main.js',
                  dest: 'resources/assets/js/main.min.js'
              }]
            }
        }
    });
    
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['assemble', 'connect', 'watch']);

};