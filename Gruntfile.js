module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            igv: {
                src: [
                    'js/**/*.js',
                    'vendor/inflate.js',
                    'vendor/zlib_and_gzip.min.js',
                    'vendor/colorpickers/vanderlee-github-io/jquery.colorpicker.js',
                    'vendor/colorpickers/vanderlee-github-io/i18n/jquery.ui.colorpicker-nl.js',
                    'vendor/colorpickers/vanderlee-github-io/swatches/jquery.ui.colorpicker-pantone.js',
                    'vendor/colorpickers/vanderlee-github-io/parts/jquery.ui.colorpicker-rgbslider.js',
                    'vendor/colorpickers/vanderlee-github-io/parts/jquery.ui.colorpicker-memory.js',
                    'vendor/colorpickers/vanderlee-github-io/parsers/jquery.ui.colorpicker-cmyk-parser.js',
                    'vendor/colorpickers/vanderlee-github-io/parsers/jquery.ui.colorpicker-cmyk-percentage-parser.js'
                ],
                dest: 'dist/igv-all.js'
            }
        },


        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },

            igv: {
                src: 'dist/igv-all.js',
                dest: 'dist/igv-all.min.js'
            }
        },

        md2html: {
            options: {
                layout: 'docs/api_layout.html'
            },
            igv: {
                src: ['docs/api.md'],
                dest: 'dist/api.html'
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-md2html');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['concat:igvexp', 'uglify:igvexp']);
    grunt.registerTask('default', ['concat:igv', 'uglify:igv', 'md2html:igv']);


};

