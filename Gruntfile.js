module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'public/js/<%= pkg.name %>.js',
                dest: 'public/js/<%= pkg.name %>.min.js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "public/css/<%= pkg.name %>.css": "public/less/<%= pkg.name %>.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "public/css/<%= pkg.name %>.min.css": "public/less/<%= pkg.name %>.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['public/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less']);

};