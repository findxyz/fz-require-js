requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-1.11.2.min'
    }
});
requirejs(['jquery', 'app/foo'], function($, f){
    var foo = new f.Foo("Foo test");
    foo.showTitle();
});