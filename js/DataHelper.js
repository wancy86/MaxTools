define("DataHelper", ["Class"], function(Class) {
    var extension = function() {};
    extension.create = function(name) {
        this.name = name;
    };
    extension.GenSerialNum = function(start_num) {
        // body...
    };


    return Class.extend(extension);
});
