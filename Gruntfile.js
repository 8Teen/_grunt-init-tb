module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            basic: {
                src: [
                    'modules/zepto/zepto.js',
                    'js/dev/index.js'
                ],
                dest: 'js/pub/index.js'
            },
            extras: {
                src: [
                    'modules/zepto/zepto.js',
                    'js/dev/index.js'
                ],
                dest: 'build/js/index.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/js/index.min.js': [
                        'js/pub/index.js'
                    ]
                }
            }
        },
        less: {
            production: {
                options: {
                    paths: ["style"],
                    cleancss: true
                },
                files: {
                    "build/style/index.css": "style/index.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['concat','uglify','less']);

}