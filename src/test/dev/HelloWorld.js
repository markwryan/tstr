casper.test.begin('Starter Test', 1, function(test) {
    casper.start('http://www.google.com').then(function() {
        test.pass('Hooray! A new test!');
    }).run(function() {
        test.done();
    });
});