module.exports = function (grunt) {
    var test_base = 'src/test';
    var module_base = 'src/module';
    var config_base = 'config/site';

    grunt.registerTask('create', 'test management tasks', function (site) {
        if(typeof site === 'undefined') {
            grunt.log.error("Specify a [site] to create (e.g. my-awesome-website)");
            return;
        }
        //Create new folders for site
        var test_path = test_base + '/' + site;
        if(!grunt.file.exists(test_path)) {
            grunt.file.mkdir(test_path);
        } else {
            grunt.fail.warn('Site "' + site + '" was already created.');
        }

        var module_path = module_base + '/' + site;
        if(!grunt.file.exists(module_path)) {
            grunt.file.mkdir(module_path);
        } else {
            grunt.fail.warn('Site "' + site + '" was already created.');
        }

        var config_path = config_base + '/' + site + '.json';

    });
};