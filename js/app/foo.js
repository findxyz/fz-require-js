define(['jquery'], function($){
    function Foo(title){
        this.title = title;
    }
    Foo.prototype.showTitle = function(){
        alert(this.title);
    }
    return {
        Foo: Foo
    }
});