module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*=============================
    =            WATCH            =
    =============================*/

    watch: {
      html: {
        files: ['src/nbcsb-landing.html',
                'src/html/*.html'],
        tasks: ['htmlmin', 'import','notify:done']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['import','notify:done', 'uglify']
      },
      css: {
        files: ['src/scss/*.scss',
                'src/scss/mixins/*.scss'],
        tasks: ['sass', 'import','notify:done']
      }
    },

    /*===================================
    =            MINIFY HTML            =
    ===================================*/
    
    htmlmin: {                                   
       dist: {                                    
         options: {                               
           removeComments: true,
           collapseWhitespace: true
         },
         files: {                                  
           'src/html/min/template.min.html': 'src/html/template.html' // CHANGE TEMPLATE NAME
         }
       }
     },

     /*====================================
     =            COMPILE SASS            =
     ====================================*/
       
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
        },
        files: {
          'dist/css/nbcsb-landing.css': 'src/scss/nbcsb-landing.scss'
        }
      },
      min: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'dist/css/nbcsb-landing.min.css': 'src/scss/nbcsb-landing.scss'
        }
      }
    },

    /*=========================================
    =            UGLIFY JAVASCRIPT            =
    =========================================*/ 

    uglify: {
      dist: {
        files: {
          'dist/js/nbcsb-landing.min.js': 'dist/js/nbcsb-landing.js'
        }
      }
    },

    /*==============================
    =            IMPORT            =
    ==============================*/
    
    import: {
      options: {},
      dist: {
        files: {
          'dist/js/nbcsb-landing.js' : 'src/js/nbcsb-landing.js',
          'dist/nbcsb-landing.ready.html' : 'src/nbcsb-landing.html'
        }
      }
    },

    /*==============================
    =            NOTIFY            =
    ==============================*/
    
    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, 
        title: "nbcsb-landing", 
        success: false, 
        duration: 1 
      }
    },
    notify: {
      done: {
        options: {
          title: 'Grunt - nbcsb-landing',
          message: 'DONE!', 
        }
      }
    }
  });

  /*==================================
  =            LOAD TASKS            =
  ==================================*/
  
  
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-import');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');
  grunt.task.run('notify_hooks');
  grunt.registerTask('default',['watch']);
};
