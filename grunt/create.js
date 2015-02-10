module.exports = function (grunt) {
    var testBase = 'src/test';
    var moduleBase = 'src/module';
    var configBase = 'config/env';

    grunt.registerTask('create', 'test management tasks', function (environment, host) {
        //Did we get some inputs?
        if(typeof environment === 'undefined' || typeof host === 'undefined') {
            grunt.log.error("Specify environment name and url base. See the README.md for more info " +
                "\n grunt create:[env]:[host]" +
                "\n grunt create:dev:dev.my-sweet-app.io");
            return;
        }

        //Create new folders for site (test, module)
        var testPath = testBase + '/' + environment;
        if(!grunt.file.exists(testPath)) {
            grunt.file.mkdir(testPath);
            grunt.file.copy('grunt/resources/casper-test.js', testPath + '/HelloWorld.js');
        } else {
            grunt.fail.warn('Environment "' + environment + '" was already created.');
        }

        var modulePath = moduleBase + '/' + environment;
        if(!grunt.file.exists(modulePath)) {
            grunt.file.mkdir(modulePath);
        } else {
            grunt.fail.warn('Site "' + environment + '" was already created.');
        }

        //Move in started config file
        var configPath = configBase + '/' + environment + '.js';
        if(!grunt.file.exists(configPath)) {
            var configTemplate = grunt.file.read('grunt/resources/config.js');
            var configFile = grunt.template.process(configTemplate.toString(), {
                data: {
                    host: host
                }
            });
            grunt.file.write(configPath, configFile);
        } else {
            grunt.fail.warn('Site "' + environment + '" was already created.');
        }

        //Edit casper task to add
        var taskTemplate = grunt.file.read('grunt/resources/casper-task.js.tmpl');
        var envTask = grunt.template.process(taskTemplate.toString(), {
            data: {
                env: environment
            }
        });
        var casperTask = grunt.file.read('grunt/casper.js').toString();
        casperTask = casperTask.replace(",\n    tasks: ['default']\n};", envTask);

        grunt.file.write('grunt/casper.js', casperTask);


    });
};